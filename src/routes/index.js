import express from 'express';
import multer from 'multer';
import propertyController from '../controllers/propertyController';
import multerConfigs from '../configs/multer';

const router = express.Router();
const upload = multer({
  storage: multerConfigs.storage,
  fileFilter: multerConfigs.fileFilter,
});

router
  .route('/properties/:_id?')
  .get(propertyController.getProperties)
  .post(upload.any(), propertyController.postProperty);

export default router;
