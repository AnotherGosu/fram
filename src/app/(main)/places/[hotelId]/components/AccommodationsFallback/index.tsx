import { generateKeys } from "@/lib";

export const AccommodationsFallback = () => {
  const keys = generateKeys(2);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {keys.map((key) => (
        <div key={key}>
          <div className="loader mb-4 h-[28px] w-1/4" />

          <div className="loader mb-4 h-[300px] rounded-md sm:h-[400px]" />

          <div className="loader mb-3 h-[20px] w-1/2" />

          <div className="flex items-end justify-between gap-2">
            <div className="loader h-[24px] w-[140px]" />
            <div className="loader h-[38px] w-[126px] rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};
