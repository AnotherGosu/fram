"use server";

import { Accommodation } from "@/types/entities";

import { db } from "@/utils/db";

export const getAccommodations = async (
  hotelId: string,
): Promise<Accommodation[]> => {
  return db
    .selectFrom("accommodation")
    .innerJoin(
      "hotelToAccommodation",
      "accommodation.id",
      "hotelToAccommodation.accommodationId",
    )
    .innerJoin("hotel", "hotel.id", "hotelToAccommodation.hotelId")
    .innerJoin(
      "accommodationToFacility",
      "accommodation.id",
      "accommodationToFacility.accommodationId",
    )
    .innerJoin("facility", "facility.id", "accommodationToFacility.facilityId")
    .select((eb) => [
      "accommodation.id",
      "accommodation.name",
      "accommodation.image",
      "accommodation.numberOfBeds",
      "accommodation.numberOfRooms",
      "accommodation.price",
      eb.fn.agg<string[]>("array_agg", ["facility.name"]).as("facilities"),
    ])
    .where("hotelToAccommodation.hotelId", "=", hotelId)
    .groupBy("accommodation.id")
    .execute();
};

export const getAccommodationMaxPrice = async (): Promise<string> => {
  const { maxPrice } = await db
    .selectFrom("accommodation")
    .select((eb) => eb.fn.max<string>("price").as("maxPrice"))
    .executeTakeFirstOrThrow();

  return maxPrice;
};
