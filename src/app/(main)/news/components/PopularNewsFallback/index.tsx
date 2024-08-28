import { Heart } from "lucide-react";

import { generateKeys } from "@/lib";

export const PopularNewsFallback = () => {
  const keys = generateKeys(3);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {keys.map((key) => (
        <div
          key={key}
          className="flex h-[400px] flex-col justify-end gap-4 rounded-md bg-stone-100 p-4"
        >
          <div className="loader h-[24px] w-3/4" />

          <div className="flex w-full flex-col gap-1">
            <div className="loader h-[20px] w-1/6" />
            <div className="loader h-[16px] w-1/12" />
          </div>
        </div>
      ))}
    </div>
  );
};
