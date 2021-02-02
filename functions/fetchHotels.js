const client = require("../client");

exports.handler = async (event) => {
  const { searchParams, hotelId } = JSON.parse(event.body);

  try {
    let entries;
    if (hotelId) {
      entries = await client.getEntry(hotelId);
    } else {
      entries = await client.getEntries({
        content_type: "hotels",
        select: "sys.id,fields",
        "fields.city[match]": searchParams.city,
      });
    }
    const hotels = structureEntries(entries, searchParams);
    return {
      statusCode: 200,
      body: JSON.stringify(hotels),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

function structureEntries(entries, searchParams) {
  let { capacity, checkIn, checkOut } = searchParams;

  const getRoomsMinMaxPrice = (rooms) => {
    const prices = rooms.map((room) => room.price);
    const minRoomPrice = Math.min(...prices);
    const maxRoomPrice = Math.max(...prices);
    return { minRoomPrice, maxRoomPrice };
  };

  const filterRoomsBySearchParamas = (rooms) => {
    return rooms.filter((room) => {
      let marker = true;

      if (capacity === 1) {
        marker &= room.capacity === 1;
      } else if (capacity === 2) {
        marker &= room.capacity === 2;
      } else if (capacity === 3) {
        marker &= room.capacity >= 3;
      }

      if (checkIn) marker &= new Date(checkIn) >= new Date(room.checkIn);
      if (checkOut) marker &= new Date(checkOut) <= new Date(room.checkOut);

      return marker;
    });
  };

  const structureImages = (images) => images.map((img) => img.fields.file.url);

  const structureRooms = (rooms, hotelId) => {
    return rooms.map((room) => {
      const structuredImages = structureImages(room.fields.images);
      return {
        ...room.fields,

        id: room.sys.id,
        hotelId,
        images: structuredImages,
      };
    });
  };

  const items = entries.items || [entries]; //collection of entries or single entry
  const hotels = items.map((item) => ({ ...item.fields, id: item.sys.id }));

  const structuredHotels = hotels.map((hotel) => {
    const { images, rooms, id: hotelId } = hotel;
    const structuredRooms = structureRooms(rooms, hotelId);
    const filteredRooms = filterRoomsBySearchParamas(structuredRooms);
    const structuredImages = structureImages(images);
    const { minRoomPrice, maxRoomPrice } = getRoomsMinMaxPrice(filteredRooms);
    return {
      ...hotel,
      minRoomPrice,
      maxRoomPrice,
      rooms: filteredRooms,
      images: structuredImages,
    };
  });

  return structuredHotels.filter((hotel) => hotel.rooms.length);
}
