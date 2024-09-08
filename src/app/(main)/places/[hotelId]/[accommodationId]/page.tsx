import { Metadata } from "next";

import { getAccommodation } from "@/api/accommodations";
import { getCurrentUser } from "@/api/auth";
import { getHotel } from "@/api/hotels";

import { PaymentSection } from "./components/PaymentSection";
import { Summary } from "./components/Summary";

export async function generateMetadata({
  params: { hotelId, accommodationId },
}: PageProps): Promise<Metadata> {
  const [hotel, accommodation] = await Promise.all([
    getHotel(hotelId),
    getAccommodation({ hotelId, accommodationId }),
  ]);

  return {
    title: `${hotel.name} - ${accommodation.name}`,
    description: `Book ${accommodation.name} in ${hotel.name} with Fram`,
  };
}

interface PageProps {
  params: { hotelId: string; accommodationId: string };
}

export default async function Page({
  params: { hotelId, accommodationId },
}: PageProps) {
  const [hotel, accommodation, user] = await Promise.all([
    getHotel(hotelId),
    getAccommodation({ hotelId, accommodationId }),
    getCurrentUser(),
  ]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <section className="max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold">Booking summary</h2>

          <Summary accommodation={accommodation} />
        </section>

        <section className="max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold">Payment options</h2>

          <PaymentSection
            hotel={hotel}
            accommodation={accommodation}
            user={user}
          />
        </section>
      </div>
    </>
  );
}
