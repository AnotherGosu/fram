import { getAccommodationMaxPrice } from "@/api/accommodations";
import { getFacilityOptions } from "@/api/options";

import { BedsFilter } from "./components/BedsFilter";
import { FacilitiesFilter } from "./components/FacilitiesFilter";
import { PriceFilter } from "./components/PriceFilter";
import { RatingFilter } from "./components/RatingFilter";
import { RoomsFilter } from "./components/RoomsFilter";

export const Filters = async () => {
  const [maxPrice, facilityOptions] = await Promise.all([
    getAccommodationMaxPrice(),
    getFacilityOptions(),
  ]);

  return (
    <div
      className="flex flex-col gap-8"
      data-test="filters"
    >
      <div className="mb-4">
        <h3 className="mb-3 font-medium">Price</h3>
        <PriceFilter maxPrice={maxPrice} />
      </div>

      <div>
        <h3 className="mb-3 font-medium">Rating</h3>
        <RatingFilter />
      </div>

      <div>
        <h3 className="mb-3 font-medium">Rooms and beds</h3>
        <div className="flex flex-col gap-2">
          <RoomsFilter />
          <BedsFilter />
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-medium">Facilities</h3>
        <FacilitiesFilter facilityOptions={facilityOptions} />
      </div>
    </div>
  );
};
