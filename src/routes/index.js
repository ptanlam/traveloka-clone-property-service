import express from 'express';
import propertyRoutes from './property';
import registrationRoutes from './registration';

const router = express.Router();

router.use('/registration', registrationRoutes);
router.use('/properties', propertyRoutes);

export default router;
