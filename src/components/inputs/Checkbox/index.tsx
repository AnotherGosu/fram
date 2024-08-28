"use client";

import { cn } from "@/utils/cn";

import { useComponent } from "./useComponent";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  defaultValue?: boolean;
  callback?: (value: boolean) => void;
}

export const Checkbox = ({
  defaultValue = false,
  callback = () => {},
  className,
  ...props
}: CheckboxProps) => {
  const { value, onChange } = useComponent({ defaultValue, callback });

  return (
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
      className={cn("focus-ring size-5 accent-slate-950", className)}
      {...props}
    />
  );
};
