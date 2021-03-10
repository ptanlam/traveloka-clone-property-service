import mongoose from 'mongoose';
import {
  countries,
  propertyPhotosPlaceholders,
  propertyTypes,
  propertyCategories,
} from '../helpers/models/propertyInfomationHelper';

const { Schema, SchemaTypes } = mongoose;

const propertySchema = new Schema(
  {
    // General Information
    propertyCategory: {
      type: String,
      enum: propertyCategories,
      required: true,
    },
    propertyType: { type: String, enum: propertyTypes, required: true },
    propertyName: { type: String, required: true },
    previousName: String,
    particularHotelChainName: String,
    location: { type: String, required: true },
    streetAddress: { type: String, required: true },
    postalCode: { type: String, maxLength: 10, required: true },
    country: { type: String, enum: countries, required: true },
    phoneNumber: { type: String, maxLength: 15, required: true },
    numberOfRooms: { type: Number, required: true },

    // Contacts Information
    mainContact: {
      type: {
        fullName: { type: String, required: true },
        email: { type: String, maxLength: 320, required: true },
        mobileNumber: { type: String, maxLength: 15, required: true },
        officePhoneNumber: { type: String, maxLength: 15, required: true },
        position: { type: String, required: true },
        isContactable24Hours: { type: Boolean, required: true },
      },
      required: true,
    },
    reservation: [
      {
        fullName: { type: String, required: true },
        email: { type: String, maxLength: 320, required: true },
        mobileNumber: { type: String, maxLength: 15, required: true },
        officePhoneNumber: { type: String, maxLength: 15, required: true },
        position: { type: String, required: true },
        isContactable24Hours: { type: Boolean, required: true },
      },
    ],
    accountingPayment: [
      {
        fullName: { type: String, required: true },
        email: { type: String, maxLength: 320, required: true },
        mobileNumber: { type: String, maxLength: 15, required: true },
        officePhoneNumber: { type: String, maxLength: 15, required: true },
        position: { type: String, required: true },
        isContactable24Hours: { type: Boolean, required: true },
      },
    ],

    // Property Details
    isReceptionAreaAvailableIn24Hrs: { type: Boolean, required: true },
    checkInTime: { type: Number, required: true },
    checkOutTime: { type: Number, required: true },
    distanceToCityCenter: { type: Number, required: true },
    numberOfFloors: { type: Number, required: true },
    cancellationPolicy: { type: String, required: true },
    propertyStyles: [String],

    // Property Facilities
    propertyFacilities: {
      common: { type: [String] },
      accessibility: { type: [String] },
      business: { type: [String] },
      connectivity: { type: [String] },
      facilities: { type: [String] },
      foodAndDrinks: { type: [String] },
      insideRoom: { type: [String] },
      nearbyAmenities: { type: [String] },
      service: { type: [String] },
      sportsAndRecreation: { type: [String] },
      thingsToDo: { type: [String] },
      transportation: { type: [String] },
      travellingWithOthers: { type: [String] },
    },

    // Rooms
    rooms: {
      type: [
        {
          roomId: { type: SchemaTypes.ObjectId, required: true },
        },
      ],
      required: true,
    },

    // Property Photos
    propertyPhotos: {
      type: [
        {
          placeholder: {
            type: String,
            enum: propertyPhotosPlaceholders,
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
      required: true,
    },
  },
  { timestamps: true },
);

const Property = mongoose.model('propertie', propertySchema);
export default Property;
