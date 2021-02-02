export function sortHotelsBySortType(hotels, sortType) {
  switch (sortType) {
    case "popularity":
      return hotels.sort((a, b) => b.rooms.length - a.rooms.length);
    case "price":
      return hotels.sort((a, b) => a.minRoomPrice - b.minRoomPrice);
    case "rating":
      return hotels.sort((a, b) => b.rating - a.rating);
    default:
      return hotels;
  }
}
