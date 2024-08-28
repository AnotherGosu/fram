"use client";

import { Minus, Plus } from "lucide-react";

import { cn } from "@/utils/cn";

import { Button } from "@/components/common/Button";

import { useComponent } from "./useComponent";

interface StepInputProps {
  defaultValue?: number;
  callback?: (value: number) => void;
  className?: string;
  dataTest?: string;
}

export const StepInput = ({
  defaultValue = 0,
  callback = () => {},
  className,
  dataTest,
}: StepInputProps) => {
  const { value, onIncrement, onDecrement } = useComponent({
    defaultValue,
    callback,
  });

  return (
    <div
      className={cn(
        "grid grid-cols-3 items-center justify-items-center gap-4",
        className,
      )}
      data-test={dataTest}
    >
      <Button
        variant="ghost"
        isIconSize
        onClick={onDecrement}
        disabled={value === 0}
        data-test={`${dataTest}-decrement`}
      >
        <Minus className="size-4" />
      </Button>

      <span data-test={`${dataTest}-value`}>{value}</span>

      <Button
        variant="ghost"
        isIconSize
        onClick={onIncrement}
        data-test={`${dataTest}-increment`}
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
};
