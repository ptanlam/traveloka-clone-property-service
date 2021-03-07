export default function populateAllPropertyInformation(data) {
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

  return {
    numberOfRooms,
    distanceToCityCenter,
    numberOfFloors,
    checkInTime,
    checkOutTime,
    ...restData,
  };
}
