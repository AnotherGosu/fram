import Image from "next/image";
import { Suspense } from "react";

import { SearchParams } from "@/types/common";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import heroImg from "@/images/hero.jpg";

import { createQueryString } from "@/lib";

import { Filters } from "./components/Filters";
import { FiltersDrawer } from "./components/FiltersDrawer";
import { Hotels } from "./components/Hotels";
import { HotelsFallback } from "./components/HotelsFallback";
import { Pagination } from "./components/Pagination";
import { PaginationFallback } from "./components/PaginationFallback";
import { Search } from "./components/Search";
import { SearchFallback } from "./components/SearchFallback";
import { SearchInput } from "./components/SearchInput";
import { SortSelect } from "./components/SortSelect";

interface PageProps {
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
  return (
    <>
      <section className="relative mb-12 flex items-center justify-center overflow-hidden rounded-md p-4 md:p-8 lg:p-16 xl:p-24 2xl:p-32">
        <Image
          src={heroImg}
          alt="Hero"
          fill
          priority
          placeholder={IMAGE_PLACEHOLDER}
          sizes="100vw"
          className="-z-10 object-cover"
        />

        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 md:gap-8">
          <h2 className="text-center text-2xl font-semibold text-white md:text-4xl">
            Discover your perfect stay in Norway
          </h2>

          <p className="text-center text-sm text-white md:text-lg">
            From cozy cabins to luxury hotels, discover the perfect place to
            stay during your Nordic adventure. <br />
            Let us help you find your home away from home
          </p>

          <Suspense fallback={<SearchFallback />}>
            <Search />
          </Suspense>
        </div>
      </section>

      <div className="grid grid-cols-1 justify-between gap-8 xl:grid-cols-[1fr_300px]">
        <section>
          <h2 className="invisible size-0">Search and sort</h2>

          <div className="grid grid-cols-2 items-end gap-4 sm:grid-cols-[1fr_150px_max-content] xl:grid-cols-[1fr_150px]">
            <SearchInput />

            <SortSelect />

            <FiltersDrawer>
              <Filters />
            </FiltersDrawer>
          </div>
        </section>

        <section
          className="row-span-2 hidden xl:block"
          data-test="filters-section"
        >
          <h2 className="mb-8 text-xl font-semibold">Filters</h2>

          <Filters />
        </section>

        <section
          id="hotels"
          className="scroll-m-40"
        >
          <h2 className="invisible size-0">Hotels</h2>

          <Suspense
            key={`${createQueryString(searchParams)}-hotels`}
            fallback={<HotelsFallback />}
          >
            <Hotels searchParams={searchParams} />
          </Suspense>

          <Suspense
            key={`${createQueryString(searchParams)}-pagination`}
            fallback={<PaginationFallback />}
          >
            <Pagination searchParams={searchParams} />
          </Suspense>
        </section>
      </div>
    </>
  );
}
