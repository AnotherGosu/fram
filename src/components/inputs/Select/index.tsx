"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { SelectOption } from "@/types/common";

import { cn } from "@/utils/cn";

import { Button } from "@/components/common/Button";

import { useComponent } from "./useComponent";

interface SelectProps {
  options: SelectOption[];
  defaultValue?: string;
  callback?: (value: string) => void;
  id?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  groupLabel?: string;
  className?: string;
  dataTest?: string;
}

export const Select = ({
  options,
  defaultValue = "",
  callback = () => {},
  id,
  placeholder = "Select...",
  icon,
  groupLabel,
  className,
  dataTest,
}: SelectProps) => {
  const { value, onChange } = useComponent({ defaultValue, callback });

  return (
    <RadixSelect.Root
      value={value}
      onValueChange={onChange}
    >
      <RadixSelect.Trigger
        id={id}
        asChild
      >
        <Button
          variant="outline"
          className={cn("data-[placeholder]:text-slate-950/60", className)}
          data-test={`${dataTest}-button`}
        >
          {icon}

          <RadixSelect.Value placeholder={placeholder} />

          <RadixSelect.Icon asChild>
            <ChevronDown className="ml-auto" />
          </RadixSelect.Icon>
        </Button>
      </RadixSelect.Trigger>

      <RadixSelect.Content
        position="popper"
        sideOffset={8}
        className="popover-animation z-50 max-h-[--radix-select-content-available-height] w-[--radix-select-trigger-width] overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl"
        data-test={`${dataTest}-content`}
      >
        <RadixSelect.Viewport className="p-1">
          <RadixSelect.Group>
            {groupLabel && (
              <RadixSelect.Label className="my-1 pl-4 text-sm font-medium">
                {groupLabel}
              </RadixSelect.Label>
            )}

            {value && (
              <RadixSelect.Item
                value="empty"
                className="my-1 flex select-none items-center justify-between rounded-sm py-1 pl-4 pr-2 text-sm opacity-50 transition data-[highlighted]:bg-stone-100 data-[highlighted]:outline-none"
              >
                <RadixSelect.ItemText>Clear selection</RadixSelect.ItemText>
              </RadixSelect.Item>
            )}

            {options.map(({ label, value }) => (
              <RadixSelect.Item
                key={value}
                value={value}
                className="my-1 flex select-none items-center justify-between rounded-sm py-1 pl-4 pr-2 text-sm transition data-[highlighted]:bg-stone-100 data-[highlighted]:outline-none"
              >
                <RadixSelect.ItemText>{label}</RadixSelect.ItemText>

                <RadixSelect.ItemIndicator asChild>
                  <Check className="size-4" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Group>
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};
