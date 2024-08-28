import { Camera, Video } from "lucide-react";
import Image from "next/image";

import { Review } from "@/types/entities";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

interface CardProps extends Review {}

export const Card = ({
  numberOfPhotos,
  numberOfVideos,
  title,
  images,
  description,
}: CardProps) => {
  return (
    <article className="group">
      <div className="mb-2 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Camera className="size-5 fill-slate-950 text-white" />
          <span>{`${numberOfPhotos} photos`}</span>
        </div>

        <div className="flex items-center gap-1">
          <Video className="size-5 fill-slate-950 text-white" />
          <span>{`${numberOfVideos} videos`}</span>
        </div>
      </div>

      <h3 className="mb-4 font-medium">{title}</h3>

      <div className="mb-4 grid grid-cols-[0_1fr_0] gap-0 sm:grid-cols-[1fr_2fr_1fr] sm:gap-4">
        {images.map((image) => (
          <div
            key={image}
            className="relative h-[250px] overflow-hidden rounded-md brightness-[0.85] transition group-hover:brightness-100"
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              placeholder={IMAGE_PLACEHOLDER}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-sm leading-loose text-stone-500">{`${description}...`}</p>
    </article>
  );
};
