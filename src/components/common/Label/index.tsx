"use client";

import * as RadixLabel from "@radix-ui/react-label";

import { cn } from "@/utils/cn";

interface LabelProps extends RadixLabel.LabelProps {
  required?: boolean;
}

export const Label = ({
  required = false,
  className,
  ...props
}: LabelProps) => {
  return (
    <RadixLabel.Root
      className={cn(
        "mb-1 inline-block text-sm font-medium after:ml-0.5 after:text-red-500 [&_+_input[required]]:after:content-['*']",
        { "after:ml-0.5 after:text-red-500 after:content-['*']": required },
        className,
      )}
      {...props}
    />
  );
};
