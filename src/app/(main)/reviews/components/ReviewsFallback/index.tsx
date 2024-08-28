import { generateKeys } from "@/lib";

export const ReviewsFallback = () => {
  const keys = generateKeys(4);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {keys.map((key) => (
        <div key={key}>
          <div className="loader mb-2 h-[20px] w-1/4" />

          <div className="loader mb-4 h-[24px] w-1/2" />

          <div className="mb-4 grid grid-cols-[0_1fr_0] gap-0 sm:grid-cols-[1fr_2fr_1fr] sm:gap-4">
            <div className="loader h-[250px] rounded-md" />
            <div className="loader h-[250px] rounded-md" />
            <div className="loader h-[250px] rounded-md" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="loader h-[20px]" />
            <div className="loader h-[20px]" />
            <div className="loader h-[20px] w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};
