import { createKysely } from "@vercel/postgres-kysely";
import { CamelCasePlugin } from "kysely";

import {
  AccommodationTable,
  AccommodationToFacilityTable,
  CityTable,
  FacilityTable,
  HotelTable,
  HotelToAccommodationTable,
  NewsTable,
  ReviewTable,
  UserTable,
} from "@/types/tables";

interface Database {
  hotel: HotelTable;
  hotelToAccommodation: HotelToAccommodationTable;
  accommodation: AccommodationTable;
  accommodationToFacility: AccommodationToFacilityTable;
  facility: FacilityTable;
  city: CityTable;
  news: NewsTable;
  review: ReviewTable;
  users: UserTable;
}

export const db = createKysely<Database>(undefined, {
  plugins: [new CamelCasePlugin()],
});
