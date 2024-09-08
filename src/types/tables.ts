export interface HotelTable {
  id: string;
  name: string;
  images: string[];
  cityId: string;
  address: string;
  rating: number;
  description: string;
}

export interface HotelToAccommodationTable {
  id: string;
  hotelId: string;
  accommodationId: string;
}

export interface AccommodationTable {
  id: string;
  name: string;
  image: string;
  numberOfBeds: number;
  numberOfRooms: number;
  price: string;
}

export interface AccommodationToFacilityTable {
  id: string;
  accommodationId: string;
  facilityId: string;
}

export interface FacilityTable {
  id: string;
  name: string;
}

export interface CityTable {
  id: string;
  name: string;
}

export interface NewsTable {
  id: string;
  image: string;
  title: string;
  description: string;
  date: Date;
  author: string;
}

export interface ReviewTable {
  id: string;
  title: string;
  description: string;
  numberOfPhotos: number;
  numberOfVideos: number;
  images: string[];
}

export interface UserTable {
  id?: string;
  email: string;
  hashedPassword: string;
  name: string;
}
