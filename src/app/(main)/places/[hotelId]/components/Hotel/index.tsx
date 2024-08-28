import { getHotel } from "@/api/hotels";

import { Information } from "./components/Information";
import { MainImage } from "./components/MainImage";
import { Previews } from "./components/Previews";

interface HotelProps {
  hotelId: string;
}

export const Hotel = async ({ hotelId }: HotelProps) => {
  const hotel = await getHotel(hotelId);

  const { images, ...information } = hotel;

  const [mainImage, ...previews] = images;

  return (
    <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <MainImage mainImage={mainImage} />
        <Previews previews={previews} />
      </div>

      <div className="-order-1 lg:order-1">
        <Information {...information} />
      </div>
    </section>
  );
};
