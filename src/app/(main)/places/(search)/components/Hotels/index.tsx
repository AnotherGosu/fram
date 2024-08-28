import { SearchParams } from "@/types/common";

import { getHotels } from "@/api/hotels";

import { Card } from "./components/Card";
import { EmptyResult } from "./components/EmptyResult";

interface HotelsProps {
  searchParams: SearchParams;
}

export const Hotels = async ({ searchParams }: HotelsProps) => {
  const { hotels } = await getHotels(searchParams);

  if (!hotels.length) return <EmptyResult />;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {hotels.map((hotel) => (
        <Card
          key={hotel.id}
          {...hotel}
        />
      ))}
    </div>
  );
};
