import AWS from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';
import uuid from 'uuid-v4';
import multerConfigs from './multer';

require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    fileFilter: multerConfigs.fileFilter,
    s3,
    bucket: process.env.AWS_BUCKET,
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: 'traveloka-clone' });
    },
    key(req, file, cb) {
      cb(null, `${uuid()}.${file.originalname.split('.')[1]}`);
    },
  }),
});

export default upload;
