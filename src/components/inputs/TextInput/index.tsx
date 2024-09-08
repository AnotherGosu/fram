import { forwardRef } from "react";

import { cn } from "@/utils/cn";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "focus-ring w-full rounded-md border border-stone-200 px-4 py-2 read-only:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
TextInput.displayName = "TextInput";
