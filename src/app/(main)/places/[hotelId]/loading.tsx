import { AccommodationsFallback } from "./components/AccommodationsFallback";
import { HotelFallback } from "./components/HotelFallback";

export default function Loading() {
  return (
    <>
      <HotelFallback />

      <section>
        <h2 className="mb-4 text-xl font-semibold">Available accommodations</h2>

        <AccommodationsFallback />
      </section>
    </>
  );
}
