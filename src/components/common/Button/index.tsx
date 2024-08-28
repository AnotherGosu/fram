import { Slot, Slottable } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/cn";

import { Loader } from "@/components/common/Loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  isIconSize?: boolean;
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      isIconSize = false,
      disabled = false,
      isLoading = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "focus-ring flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
          {
            "bg-slate-950 text-white hover:bg-slate-950/80":
              variant === "default",
            "border-stone-200 hover:bg-stone-100": variant === "outline",
            "hover:bg-stone-100": variant === "ghost",
            "size-[38px] p-0": isIconSize,
          },
          className,
        )}
        {...props}
      >
        {isLoading && <Loader />}
        <Slottable>{children}</Slottable>
      </Comp>
    );
  },
);
Button.displayName = "Button";
