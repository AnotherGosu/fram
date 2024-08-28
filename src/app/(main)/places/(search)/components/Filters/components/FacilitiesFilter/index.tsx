"use client";

import { SelectOption } from "@/types/common";

import { Checkbox } from "@/components/inputs/Checkbox";

import { useComponent } from "./useComponent";

interface FacilitiesFilterProps {
  facilityOptions: SelectOption[];
}

export const FacilitiesFilter = ({
  facilityOptions,
}: FacilitiesFilterProps) => {
  const { checkedValues, onCheck } = useComponent();

  return (
    <div
      className="flex flex-col gap-2"
      data-test="facilities-filter"
    >
      {facilityOptions.map(({ label, value }) => (
        <div
          key={value}
          className="flex items-center justify-between"
        >
          <span>{label}</span>

          <Checkbox
            id={label}
            defaultValue={checkedValues.includes(value)}
            callback={() => onCheck(value)}
          />
        </div>
      ))}
    </div>
  );
};
