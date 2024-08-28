import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Hotel } from "@/types/entities";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { formatPrice } from "@/lib";

import { Rating } from "@/components/common/Rating";

interface CardProps extends Hotel {}

export const Card = ({
  id,
  images,
  name,
  city,
  rating,
  minPrice,
}: CardProps) => {
  return (
    <Link
      href={`/places/${id}`}
      className="focus-ring group relative block overflow-hidden rounded-sm"
    >
      <div className="relative h-[250px]">
        <Image
          src={images[0]}
          alt={`Facade view of ${name}`}
          fill
          sizes="400px"
          className="object-cover"
          placeholder={IMAGE_PLACEHOLDER}
        />
      </div>

      <div className="absolute right-0 top-4 rounded-l-sm bg-slate-950 px-2 py-0.5 text-xs font-medium text-white">
        {`from ${formatPrice(minPrice!)}`}
      </div>

      <div className="flex flex-col gap-1 bg-stone-100 p-4 transition group-hover:bg-slate-800 group-hover:text-white group-focus:bg-slate-800 group-focus:text-white">
        <h4 className="font-medium">{name}</h4>

        <div className="flex items-center gap-1">
          <MapPinIcon className="size-4" />
          {city}
        </div>

        <Rating
          rating={rating}
          className="group-hover:fill-white"
        />
      </div>
    </Link>
  );
};
