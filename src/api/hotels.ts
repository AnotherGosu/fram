"use server";

import { SearchParams } from "@/types/common";
import { Hotel } from "@/types/entities";

import { db } from "@/utils/db";

const ITEMS_PER_PAGE = 9;

export const getHotels = async (
  searchParams: SearchParams,
): Promise<{ hotels: Hotel[]; totalPages: number }> => {
  let query = db
    .selectFrom("hotel")
    .innerJoin("city", "city.id", "hotel.cityId")
    .innerJoin(
      "hotelToAccommodation",
      "hotel.id",
      "hotelToAccommodation.hotelId",
    )
    .innerJoin(
      "accommodation",
      "accommodation.id",
      "hotelToAccommodation.accommodationId",
    )
    .select((eb) => [
      "hotel.id",
      "hotel.name",
      "hotel.description",
      "hotel.address",
      "hotel.rating",
      "hotel.images",
      "hotel.cityId",
      "city.name as city",
      eb.fn.min<string>("accommodation.price").as("minPrice"),
      eb.fn.countAll<string>().over().as("count"),
    ])
    .groupBy(["hotel.id", "city.name"]);

  const {
    page = "1",
    sort,
    city,
    occupancy,
    price,
    rooms,
    beds,
    rating,
  } = searchParams;

  if (sort === "2") {
    query = query.orderBy("minPrice asc");
  } else if (sort === "3") {
    query = query.orderBy("rating desc");
  } else {
    query = query.orderBy("id asc");
  }

  if (city) {
    query = query.where("city.id", "=", city);
  }

  if (occupancy) {
    query = query.where("accommodation.id", "=", occupancy);
  }

  if (price) {
    const [minPrice, maxPrice] = price.split(",");

    query = query
      .where("accommodation.price", ">=", minPrice)
      .where("accommodation.price", "<=", maxPrice);
  }

  if (rooms) {
    query = query.where("accommodation.numberOfRooms", ">=", Number(rooms));
  }

  if (beds) {
    query = query.where("accommodation.numberOfBeds", ">=", Number(beds));
  }

  if (rating) {
    query = query.where("hotel.rating", "=", Number(rating));
  }

  query = query
    .limit(ITEMS_PER_PAGE)
    .offset(ITEMS_PER_PAGE * (Number(page) - 1));

  const hotels = await query.execute();

  const count = Number(hotels[0]?.count) || 0;

  const quotient = Math.floor(count / ITEMS_PER_PAGE);
  const remainder = count % ITEMS_PER_PAGE;

  const totalPages = remainder ? quotient + 1 : quotient;

  return { hotels, totalPages };
};

export const getHotel = async (hotelId: string): Promise<Hotel> => {
  return db
    .selectFrom("hotel")
    .innerJoin("city", "city.id", "hotel.cityId")
    .select([
      "hotel.id",
      "hotel.name",
      "hotel.description",
      "hotel.address",
      "hotel.rating",
      "hotel.images",
      "hotel.cityId",
      "city.name as city",
    ])
    .where("hotel.id", "=", hotelId)
    .executeTakeFirstOrThrow();
};

export const getHotelIds = async (): Promise<string[]> => {
  const hotels = await db.selectFrom("hotel").select("id").execute();

  return hotels.map((hotel) => hotel.id);
};
