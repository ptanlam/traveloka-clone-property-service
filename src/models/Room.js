import mongoose from 'mongoose';
import {
  bedTypes,
  roomPhotoPlaceholders,
  roomTypes,
} from '../helpers/models/roomInformationHelper';

const { Schema } = mongoose;

const roomSchema = new Schema({
  roomName: { type: String, required: true },
  roomSpecification: {
    type: {
      roomType: { type: String, enum: roomTypes, required: true },
      bedType: { type: String, enum: bedTypes, required: true },
      maximumOccupancy: { type: Number, required: true },
    },
    required: true,
  },
  roomSize: { width: Number, length: Number },
  isBreakfastIncluded: { type: Boolean, required: true },
  numberOfRoomsForThisType: { type: Number, required: true },
  roomFacilities: {
    roomAndLaundry: { type: [String] },
    foodAndDrinks: { type: [String] },
    entertainment: { type: [String] },
    roomConfigurationAndAccess: { type: [String] },
    bathroomAndPool: { type: [String] },
  },
  roomPhotos: {
    type: [
      {
        placeholder: {
          type: String,
          enum: roomPhotoPlaceholders,
          required: true,
        },
        photos: {
          type: [
            {
              location: { type: String, required: true },
              key: { type: String, required: true },
            },
          ],
          required: true,
        },
      },
    ],
  },
});

const Room = mongoose.model('room', roomSchema);

export default Room;
