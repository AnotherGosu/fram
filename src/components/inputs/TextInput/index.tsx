import { forwardRef } from "react";

import { cn } from "@/utils/cn";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "focus-ring peer w-full rounded-md border border-stone-200 px-4 py-2",
          className,
        )}
        {...props}
      />
    );
  },
);
TextInput.displayName = "TextInput";
