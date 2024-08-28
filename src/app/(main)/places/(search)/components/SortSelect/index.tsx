"use client";

import { ArrowDownUp } from "lucide-react";

import { SORT_OPTIONS } from "@/constants/options";

import { useSearchParamInput } from "@/hooks/useSearchParamInput";

import { Select } from "@/components/inputs/Select";

export const SortSelect = () => {
  const { defaultValue, onChange } = useSearchParamInput("sort");

  return (
    <Select
      options={SORT_OPTIONS}
      defaultValue={defaultValue}
      callback={onChange}
      placeholder="Sort by..."
      icon={<ArrowDownUp />}
      groupLabel="Sort by"
      dataTest="sort"
    />
  );
};
