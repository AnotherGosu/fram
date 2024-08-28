export interface SelectOption {
  label: string;
  value: string;
}

export type SearchParams = Partial<{
  page: string;
  sort: string;
  city: string;
  occupancy: string;
  price: string;
  rooms: string;
  beds: string;
  rating: string;
}>;
