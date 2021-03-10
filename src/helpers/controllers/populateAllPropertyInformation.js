import Room from '../../models/Room';

export default async function populateAllPropertyInformation(data) {
  let {
    numberOfRooms,
    distanceToCityCenter,
    numberOfFloors,
    checkInTime,
    checkOutTime,
    // eslint-disable-next-line prefer-const
    ...restData
  } = data;

  // Convert numeric fields
  numberOfRooms = parseInt(data.numberOfRooms, 10);
  distanceToCityCenter = parseInt(data.distanceToCityCenter, 10);
  numberOfFloors = parseInt(data.numberOfFloors, 10);
  checkInTime = parseInt(data.checkInTime, 10);
  checkOutTime = parseInt(data.checkOutTime, 10);

  const room = new Room({
    numberOfRooms,
    distanceToCityCenter,
    numberOfFloors,
    checkInTime,
    checkOutTime,
    ...restData,
  });

  await room.save();

  // eslint-disable-next-line no-underscore-dangle
  return room._id();
}
