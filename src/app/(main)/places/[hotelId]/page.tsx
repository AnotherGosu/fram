import { Metadata } from "next";
import { Suspense } from "react";

import { getHotel, getHotelIds } from "@/api/hotels";

import { Accommodations } from "./components/Accommodations";
import { AccommodationsFallback } from "./components/AccommodationsFallback";
import { Hotel } from "./components/Hotel";
import { HotelFallback } from "./components/HotelFallback";

export async function generateStaticParams() {
  const ids = await getHotelIds();

  return ids.map((id) => ({ hotelId: id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const hotel = await getHotel(params.hotelId);

  return { title: hotel?.name, description: `Book ${hotel?.name} with Fram` };
}

interface PageProps {
  params: { hotelId: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Suspense fallback={<HotelFallback />}>
        <Hotel hotelId={params.hotelId} />
      </Suspense>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Available accommodations</h2>

        <Suspense fallback={<AccommodationsFallback />}>
          <Accommodations hotelId={params.hotelId} />
        </Suspense>
      </section>
    </>
  );
}
