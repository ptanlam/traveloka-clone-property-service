import mongoose from 'mongoose';

const { Schema } = mongoose;

const propertyTypes = [
  'Hotel',
  'Hostel',
  'Villa',
  'Resort',
  'Apartment',
  'Bed and Breakfast',
  'Other',
];

const countries = ['Australia', 'Vietnam'];

const hotelSchema = new Schema({
  // General Information
  propertyType: { type: String, enum: propertyTypes, required: true },
  propertyName: { type: String, required: true },
  previousName: String,
  particularHotelChainName: String,
  streetAddress: { type: String, required: true },
  postalCode: { type: Number, required: true },
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
    common: [String],
    accessibility: [String],
    business: [String],
    connectivity: [String],
    facilities: [String],
    foodAndDrinks: [String],
    insideRoom: [String],
    nearbyAmenities: [String],
  },

  // Rooms
  rooms: {
    type: [
      {
        roomName: { type: String, required: true },
        roomSpecification: {
          type: {
            roomType: { type: String, required: true },
            bedType: { type: String, required: true },
            maximumOccupancy: { type: Number, required: true },
          },
        },
        roomSize: { width: Number, length: Number },
        isBreakfastIncluded: { type: Boolean, required: true },
        numberOfRoomsForThisType: { type: Number, required: true },
        roomFacilities: {
          roomAndLaundry: [String],
        },
        roomPhotos: { type: [String], required: true },
      },
    ],
    required: true,
  },

  // Property Photos
  propertyPhotos: { type: [String], required: true },
});

const Hotel = mongoose.model('hotel', hotelSchema);
export default Hotel;
