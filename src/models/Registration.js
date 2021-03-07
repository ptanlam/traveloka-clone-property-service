import mongoose from 'mongoose';
import {
  propertyTypes,
  propertyCategories,
} from '../helpers/models/propertyInfomationHelper';

const { Schema } = mongoose;

const registrationSchema = new Schema(
  {
    propertyCategory: {
      type: String,
      enum: propertyCategories,
      required: true,
    },
    propertyType: { type: String, enum: propertyTypes, required: true },
    photos: {
      type: [
        {
          location: { type: String, required: true },
          key: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true },
);

const Registration = mongoose.model('registration', registrationSchema);

export default Registration;
