import { getAccommodations } from "@/api/accommodations";

import { Card } from "./components/Card";

interface AccommodationsProps {
  hotelId: string;
}

export const Accommodations = async ({ hotelId }: AccommodationsProps) => {
  const accommodations = await getAccommodations(hotelId);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {accommodations.map((accommodation) => (
        <Card
          key={accommodation.id}
          {...accommodation}
        />
      ))}
    </div>
  );
};
