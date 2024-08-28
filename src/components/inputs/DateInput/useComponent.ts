import { useState } from "react";
import { DateRange } from "react-day-picker";

import { formatDate } from "@/lib";

export const useComponent = ({
  defaultValue,
  callback,
}: {
  defaultValue?: DateRange;
  callback: (value: any) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value: DateRange | undefined) => {
    setValue(value);
    callback(value);
  };

  const formattedValue = value?.from
    ? value?.to
      ? `${formatDate(value.from)} - ${formatDate(value.to)}`
      : formatDate(value.from)
    : "";

  return { formattedValue, value, onChange };
};
