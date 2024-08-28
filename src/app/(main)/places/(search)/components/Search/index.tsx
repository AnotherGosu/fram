import { getCityOptions, getOccupancyOptions } from "@/api/options";

import { SearchForm } from "./components/SearchForm";

export const Search = async () => {
  const [cityOptions, occupancyOptions] = await Promise.all([
    getCityOptions(),
    getOccupancyOptions(),
  ]);

  return (
    <SearchForm
      cityOptions={cityOptions}
      occupancyOptions={occupancyOptions}
    />
  );
};
