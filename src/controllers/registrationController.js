import { s3 } from '../configs/multer-aws-s3';
import Registration from '../models/Registration';
import convertToPlurals from '../helpers/convertToPlurals';

// [GET] /api/v1/registration/:_id
async function getRegistrationPropertyById(req, res) {
  try {
    const { _id } = req.params;
    if (!_id) return res.status(404).send('Not found!');

    const registration = await Registration.findById(_id);
    if (!registration) return res.status(404).send('Not found!');

    return res.status(200).json({ registration });
  } catch (err) {
    return res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

// [POST] /api/v1/registration
async function postRegistration(req, res) {
  try {
    const registration = new Registration({ ...req.body });
    await registration.save();

    // eslint-disable-next-line no-underscore-dangle
    return res.redirect(`/api/v1/registration/${registration._id}`);
  } catch (err) {
    return res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

// [POST] /api/v1/registration/:_id/photos
async function postPhotos(req, res) {
  const photos = req.files.map((photo) => ({
    location: photo.location,
    key: photo.key,
  }));
  try {
    const { _id } = req.params;
    await Registration.findByIdAndUpdate(_id, { photos });

    return res
      .status(201)
      .send(
        `Uploaded ${photos.length} ${convertToPlurals(
          photos.length,
          'photo',
        )} successfully!`,
      );
  } catch (err) {
    return res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

// [PATCH] /api/v1/registration/:_id/photos
async function deletePhotos(req, res) {
  const { keys } = req.body;

  try {
    const { _id } = req.params;
    const registration = await Registration.findById(_id);
    const photos = registration.photos.filter(
      (photo) => !keys.includes(photo.key),
    );
    await registration.updateOne({ photos });

    keys.forEach(async (key) => {
      await s3
        .deleteObject({ Bucket: process.env.AWS_BUCKET, Key: key })
        .promise();
    });

    res
      .status(200)
      .send(
        `Deleted ${keys.length} ${convertToPlurals(
          keys.length,
          'photo',
        )} successfully!`,
      );
  } catch (err) {
    res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

export default {
  getRegistrationPropertyById,
  postRegistration,
  postPhotos,
  deletePhotos,
};
