"use client";

import { Search } from "lucide-react";

import { useSearchParamInput } from "@/hooks/useSearchParamInput";

export const SearchInput = () => {
  const { defaultValue, onChange } = useSearchParamInput("search", "", 300);

  return (
    <div className="relative col-span-2 sm:col-span-1">
      <Search className="absolute left-3 top-3 size-4" />

      <input
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search your hotel..."
        className="focus-ring h-[38px] w-full rounded-md bg-stone-100 pl-9 pr-4"
        data-test="search-input"
      />
    </div>
  );
};
