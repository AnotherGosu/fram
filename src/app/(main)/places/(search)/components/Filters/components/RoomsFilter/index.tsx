"use client";

import { StepInput } from "@/components/inputs/StepInput";

import { useComponent } from "./useComponent";

export const RoomsFilter = () => {
  const { defaultValue, callback } = useComponent();

  return (
    <div className="flex items-center justify-between gap-4">
      <span>Rooms</span>

      <StepInput
        defaultValue={Number(defaultValue)}
        callback={callback}
        dataTest="rooms-filter"
      />
    </div>
  );
};
