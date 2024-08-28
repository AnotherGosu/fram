import { HotelsFallback } from "./components/HotelsFallback";
import { PaginationFallback } from "./components/PaginationFallback";
import { SearchFallback } from "./components/SearchFallback";

export default function Loading() {
  return (
    <>
      <div className="mb-12 flex items-center justify-center rounded-md bg-stone-100 p-4 md:p-8 lg:p-16 xl:p-24 2xl:p-32">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 md:gap-8">
          <h2 className="text-center text-2xl font-semibold text-transparent md:text-4xl">
            Discover your perfect stay in Norway
          </h2>

          <p className="text-center text-sm text-transparent md:text-lg">
            From cozy cabins to luxury hotels, discover the perfect place to
            stay during your Nordic adventure. <br />
            Let us help you find your home away from home
          </p>

          <SearchFallback />
        </div>
      </div>

      <div className="grid grid-cols-1 justify-between gap-8 xl:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-2 items-end gap-4 sm:grid-cols-[1fr_150px_max-content] xl:grid-cols-[1fr_150px]">
          <div className="loader h-[38px] rounded-md" />
          <div className="loader h-[38px] rounded-md" />
        </div>

        <div className="loader row-span-2 hidden xl:block" />

        <div>
          <HotelsFallback />
          <PaginationFallback />
        </div>
      </div>
    </>
  );
}
