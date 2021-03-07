import express from 'express';
import registrationController from '../controllers/registrationController';
import { upload } from '../configs/multer-aws-s3';

const router = express.Router();

router
  .route('/:_id/photos')
  .post(upload.array('photos'), registrationController.postPhotos)
  .patch(registrationController.deletePhotos);

router
  .route('/:_id?')
  .get(registrationController.getRegistrationPropertyById)
  .post(registrationController.postRegistration);

export default router;
