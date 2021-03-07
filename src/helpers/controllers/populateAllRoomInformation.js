/* eslint-disable prefer-const */
export default function populateAllRoomInformation(data) {
  let {
    roomSpecification,
    roomSize,
    numberOfRoomsForThisType,
    ...restData
  } = data;

  const { maximumOccupancy } = roomSpecification;
  roomSpecification.maximumOccupancy = parseInt(maximumOccupancy, 10);

  const { width, length } = roomSize;
  roomSize.width = parseInt(width, 10);
  roomSize.length = parseInt(length, 10);

  numberOfRoomsForThisType = parseInt(numberOfRoomsForThisType, 10);

  return {
    roomSize,
    roomSpecification,
    numberOfRoomsForThisType,
    restData,
  };
}
