export const HotelFallback = () => {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="loader mb-4 h-[300px] rounded-md sm:h-[400px] lg:h-[500px]" />

        <div className="flex justify-center gap-4">
          <div className="loader size-[75px] rounded-md" />
          <div className="loader size-[75px] rounded-md" />
          <div className="loader size-[75px] rounded-md" />
        </div>
      </div>

      <div className="-order-1 lg:order-1">
        <div className="loader mb-4 h-[28px] w-1/2" />

        <div className="loader h-[24px] w-2/3" />

        <div className="my-2 h-[1px] bg-stone-200" />

        <div className="flex flex-col gap-4">
          <div className="loader h-[24px]" />
          <div className="loader h-[24px]" />
          <div className="loader h-[24px] w-1/2" />
        </div>
      </div>
    </div>
  );
};
