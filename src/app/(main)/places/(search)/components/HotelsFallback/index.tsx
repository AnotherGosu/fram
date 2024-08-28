import { MapPinIcon } from "lucide-react";

import { generateKeys } from "@/lib";

import { Rating } from "@/components/common/Rating";

export const HotelsFallback = () => {
  const keys = generateKeys(9);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {keys.map((key) => (
        <div
          key={key}
          className="h-[354px] w-full overflow-hidden rounded-sm"
        >
          <div className="loader h-[250px] w-full" />

          <div className="flex h-[104px] flex-col gap-1 bg-stone-100 p-4">
            <span className="loader w-max text-transparent">
              Hotel Name Placeholder
            </span>

            <div className="flex items-center gap-1">
              <MapPinIcon className="size-4" />
              <span className="loader text-transparent">City Placeholder</span>
            </div>

            <Rating
              rating={5}
              className="animate-pulse fill-slate-200"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
