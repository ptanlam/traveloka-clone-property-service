import express from 'express';
import propertyController from '../controllers/propertyController';
import upload from '../configs/multer-aws-s3';

const router = express.Router();

router
  .route('/properties/:_id?')
  .get(propertyController.getProperties)
  .post(upload.any(), propertyController.postProperty);

export default router;
