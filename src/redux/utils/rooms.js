export function filterRoomsByParams(allRooms, filterParams) {
  const { prices, options, facilities } = filterParams;
  const { currentMinPrice, currentMaxPrice } = prices;

  const hotelsFilteredByRooms = {};

  allRooms.forEach((rooms) => {
    let filteredRooms = rooms;
    const hotelId = rooms[0].hotelId;

    if (currentMinPrice && currentMaxPrice) {
      filteredRooms = filteredRooms.filter(
        (room) => room.price >= currentMinPrice && room.price <= currentMaxPrice
      );
    }

    Object.entries(options).forEach(([option, value]) => {
      if (value)
        filteredRooms = filteredRooms.filter((room) => room[option] === value);
    });

    Object.entries(facilities).forEach(([facility, value]) => {
      if (value)
        filteredRooms = filteredRooms.filter((room) => {
          const { facilities: roomFacilities = [] } = room;
          return roomFacilities.includes(facility);
        });
    });

    if (filteredRooms.length) hotelsFilteredByRooms[hotelId] = filteredRooms;
  });

  return hotelsFilteredByRooms;
}
