import { Heart } from "lucide-react";
import Image from "next/image";

import { News } from "@/types/entities";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { formatDate } from "@/lib";

interface CardProps extends News {}

export const Card = ({
  title,
  image,
  description,
  author,
  date,
}: CardProps) => {
  return (
    <article className="group relative h-[400px] overflow-hidden rounded-md">
      <Image
        src={image}
        alt="News cover"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        placeholder={IMAGE_PLACEHOLDER}
        className="-z-10 object-cover"
      />

      <div className="flex h-full flex-col justify-end gap-4 p-4 text-white backdrop-brightness-[0.7] transition group-hover:backdrop-brightness-100">
        <h3 className="font-medium">{title}</h3>

        <p className="text-xs">{description}</p>

        <div className="flex items-center justify-between gap-2 text-sm">
          <div className="flex flex-col gap-1">
            <span>{author}</span>
            <span className="text-xs text-stone-300">{formatDate(date)}</span>
          </div>

          <Heart className="size-5 hover:fill-white" />
        </div>
      </div>
    </article>
  );
};
