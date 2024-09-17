export const SearchFallback = () => {
  return (
    <div className="grid w-full grid-cols-1 items-end gap-2 rounded-sm bg-white p-4 sm:grid-cols-2 lg:grid-cols-5">
      <div>
        <span className="mb-1 inline-block text-sm font-medium">City</span>
        <div className="loader h-[38px] rounded-md" />
      </div>

      <div>
        <span className="mb-1 inline-block text-sm font-medium">Occupancy</span>
        <div className="loader h-[38px] rounded-md" />
      </div>

      <div className="col-span-1 lg:col-span-2">
        <span className="mb-1 inline-block text-sm font-medium">
          Period of stay
        </span>
        <div className="loader h-[38px] rounded-md" />
      </div>

      <div className="loader h-[38px] rounded-md" />
    </div>
  );
};
