"use client";

import * as RadixSlider from "@radix-ui/react-slider";

import { cn } from "@/utils/cn";

import { useComponent } from "./useComponent";

interface SliderProps {
  defaultValue?: number[];
  callback?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  className?: string;
  dataTest?: string;
}

export const Slider = ({
  defaultValue = [],
  callback = () => {},
  min = 0,
  max = 100,
  step = 1,
  minStepsBetweenThumbs = 1,
  className,
  dataTest,
}: SliderProps) => {
  const { value, onValueChange } = useComponent(defaultValue);

  return (
    <RadixSlider.Root
      value={value}
      onValueChange={onValueChange}
      onValueCommit={callback}
      min={min}
      max={max}
      step={step}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      className={cn(
        "relative flex h-[20px] w-[300px] touch-none select-none items-center",
        className,
      )}
      data-test={dataTest}
    >
      <RadixSlider.Track className="relative h-[3px] grow rounded-full bg-stone-100">
        <RadixSlider.Range className="absolute h-full rounded-full bg-slate-950" />
      </RadixSlider.Track>

      {defaultValue.map((_, idx) => (
        <RadixSlider.Thumb
          key={idx}
          className="relative block size-[20px] rounded-full bg-slate-950 shadow-md transition after:absolute after:left-1/2 after:top-6 after:-translate-x-1/2 after:transform after:text-xs after:content-[attr(aria-valuenow)] hover:bg-slate-700 focus:bg-stone-100"
          data-test={`${dataTest}-thumb-${idx + 1}`}
        />
      ))}
    </RadixSlider.Root>
  );
};
