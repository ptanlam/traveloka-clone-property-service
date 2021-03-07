import Property from '../models/Property';
import getPropertiesByFilterConditions from '../helpers/controllers/getPropertiesByFilterConditions';
import populateAllPropertyInformation from '../helpers/controllers/populateAllPropertyInformation';

// [GET] /api/v1/properties/:_id
async function getProperties(req, res) {
  try {
    const { _id } = req.params;
    if (_id) {
      const property = await Property.findById(_id);
      return res.status(200).json({ property });
    }

    const properties = await getPropertiesByFilterConditions(req.query);
    return res.status(200).json({ properties });
  } catch (err) {
    return res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

// [POST] /api/v1/properties
async function postProperty(req, res) {
  try {
    const { rooms: roomInformation, ...generalInformation } = req.body;

    const rooms = roomInformation.map(populateAllPropertyInformation);
    const propertyInformation = populateAllPropertyInformation(
      generalInformation,
    );

    const property = new Property({ ...propertyInformation, rooms });
    await property.save();
    return res
      .status(201)
      .send(`Registered accommodation ${property.propertyName} successfully!`);
  } catch (err) {
    return res.status(500).send(`Some errors occurred: ${err.message}`);
  }
}

export default {
  getProperties,
  postProperty,
};
