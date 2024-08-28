import Image from "next/image";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

interface MainImageProps {
  mainImage: string;
}

export const MainImage = ({ mainImage }: MainImageProps) => {
  return (
    <div className="relative mb-4 h-[300px] overflow-hidden rounded-md sm:h-[400px] lg:h-[500px]">
      <Image
        src={mainImage}
        alt="Facade view"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        placeholder={IMAGE_PLACEHOLDER}
        className="object-cover"
      />
    </div>
  );
};
