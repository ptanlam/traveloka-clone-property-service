import express from 'express';
import propertyController from '../controllers/propertyController';
import upload from '../configs/multer-aws-s3';

const router = express.Router();

router
  .route('/properties/photos')
  .post(upload.any(), propertyController.postPhotos);

router
  .route('/properties/:_id?')
  .get(propertyController.getProperties)
  .post(propertyController.postProperty);

export default router;
