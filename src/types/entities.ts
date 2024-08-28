import {
  AccommodationTable,
  HotelTable,
  NewsTable,
  ReviewTable,
} from "./tables";

export interface Hotel extends Omit<HotelTable, "cityId"> {
  city: string;
  minPrice?: string | null;
}

export interface Accommodation extends AccommodationTable {
  facilities: string[];
}

export interface News extends NewsTable {}

export interface Review extends ReviewTable {}
