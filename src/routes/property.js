import express from 'express';
import propertyController from '../controllers/propertyController';

const router = express.Router();

router
  .route('/:_id?')
  .get(propertyController.getProperties)
  .post(propertyController.postProperty);

export default router;
