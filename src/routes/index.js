import express from 'express';
import hotelController from '../controllers/hotelController';

const router = express.Router();

router.route('/hotels/:hotelId').get(hotelController.getHotels);

export default router;
