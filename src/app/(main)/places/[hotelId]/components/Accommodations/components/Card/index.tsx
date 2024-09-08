import Image from "next/image";
import Link from "next/link";

import { Accommodation } from "@/types/entities";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { formatPrice } from "@/lib";

import { Button } from "@/components/common/Button";

import { FacilityIcon } from "./components/FacilityIcon";

interface CardProps extends Accommodation {
  hotelId: string;
}

export const Card = ({
  id,
  name,
  image,
  numberOfBeds,
  numberOfRooms,
  facilities,
  price,
  hotelId,
}: CardProps) => {
  return (
    <article>
      <h3 className="mb-4 text-lg font-medium">{name}</h3>

      <div className="relative mb-4 h-[300px] overflow-hidden rounded-md sm:h-[400px]">
        <Image
          src={image}
          alt="Example view"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          placeholder={IMAGE_PLACEHOLDER}
          className="object-cover"
        />
      </div>

      <div className="mb-3 flex gap-6 text-sm">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1"
          >
            <FacilityIcon facility={facility} />
            {facility}
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between gap-2">
        <div className="flex gap-4">
          <span>{`Rooms: ${numberOfRooms}`}</span>
          <span>{`Beds: ${numberOfBeds}`}</span>
        </div>

        <Button
          asChild
          className="w-max"
        >
          <Link
            href={`/places/${hotelId}/${id}`}
          >{`Book for ${formatPrice(price)}`}</Link>
        </Button>
      </div>
    </article>
  );
};
