"use client";

import { StepInput } from "@/components/inputs/StepInput";

import { useComponent } from "./useComponent";

export const BedsFilter = () => {
  const { defaultValue, callback } = useComponent();

  return (
    <div className="flex items-center justify-between gap-4">
      <span>Beds</span>

      <StepInput
        defaultValue={Number(defaultValue)}
        callback={callback}
        dataTest="beds-filter"
      />
    </div>
  );
};
