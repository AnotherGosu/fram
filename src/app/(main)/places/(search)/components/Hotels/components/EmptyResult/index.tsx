import { SearchX } from "lucide-react";

export const EmptyResult = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <SearchX className="size-6" />

      <p className="text-center text-sm">
        We couldn&#39;t find any hotels that satisfy your requirements.
        <br />
        Try changing search or filter options.
      </p>
    </div>
  );
};
