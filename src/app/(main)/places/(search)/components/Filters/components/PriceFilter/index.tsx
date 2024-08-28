"use client";

import { Slider } from "@/components/inputs/Slider";

import { useComponent } from "./useComponent";

interface PriceFilterProps {
  maxPrice: string;
}

export const PriceFilter = ({ maxPrice }: PriceFilterProps) => {
  const { defaultValue, callback } = useComponent(maxPrice);

  return (
    <Slider
      defaultValue={defaultValue}
      callback={callback}
      max={Number(maxPrice)}
      step={10}
      dataTest="price-filter"
    />
  );
};
