"use client";

import * as Popover from "@radix-ui/react-popover";
import { Calendar, ChevronDown } from "lucide-react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

import { cn } from "@/utils/cn";

import { Button } from "@/components/common/Button";

import { useComponent } from "./useComponent";

interface DateInputProps {
  defaultValue?: DateRange;
  callback?: (value: DateRange | undefined) => void;
  id?: string;
  className?: string;
  dataTest?: string;
}

export const DateInput = ({
  defaultValue,
  callback = () => {},
  id,
  className,
  dataTest,
}: DateInputProps) => {
  const defaultClassNames = getDefaultClassNames();

  const { formattedValue, value, onChange } = useComponent({
    defaultValue,
    callback,
  });

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          id={id}
          variant="outline"
          className={cn({ "text-slate-950/60": !formattedValue }, className)}
          data-test={`${dataTest}-button`}
        >
          <Calendar />

          {formattedValue || "Select..."}

          <ChevronDown className="ml-auto" />
        </Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="popover-animation z-50 flex max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width] justify-center overflow-hidden rounded-md border border-slate-200 bg-white p-4 shadow-2xl"
          data-test={`${dataTest}-content`}
        >
          <DayPicker
            selected={value}
            onSelect={onChange}
            mode="range"
            showOutsideDays
            classNames={{
              caption_label: `${defaultClassNames.caption_label} !text-base lg:!text-lg`,
              day: `${defaultClassNames.day} !w-[30px] !h-[30px] lg:!w-[40px] lg:!h-[40px] transition [&:not([data-selected])]:hover:bg-stone-100`,
              selected: "hover:opacity-70",
              day_button: `${defaultClassNames.day_button} !w-[30px] !h-[30px] lg:!w-[40px] lg:!h-[40px] !text-sm lg:!text-base !border-transparent`,
              range_start: "bg-slate-950 rounded-sm text-white",
              range_end: "bg-slate-950 rounded-sm text-white",
              range_middle: "bg-stone-200 rounded-none",
              today: "",
              chevron: "fill-slate-950",
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
