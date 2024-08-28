export const SearchFallback = () => {
  return (
    <div className="grid w-full grid-cols-1 items-end gap-2 rounded-sm p-4 pt-[43px] sm:grid-cols-2 lg:grid-cols-5">
      <div className="loader h-[38px]" />
      <div className="loader h-[38px]" />
      <div className="loader col-span-1 h-[38px] lg:col-span-2" />
      <div className="loader h-[38px]" />
    </div>
  );
};
