import { useState } from "react";

import { useSearchParamInput } from "@/hooks/useSearchParamInput";

export const useComponent = () => {
  const { defaultValue, onChange } = useSearchParamInput("facilities");

  const [checkedValues, setCheckedValues] = useState<string[]>(
    defaultValue ? defaultValue.split(",") : [],
  );

  const onCheck = (value: string) => {
    let updatedValues: string[] = [];

    if (checkedValues.includes(value)) {
      updatedValues = checkedValues.filter(
        (checkedValue) => checkedValue !== value,
      );
    } else {
      updatedValues = [...checkedValues, value];
    }

    setCheckedValues(updatedValues);

    onChange(updatedValues.join(","));
  };

  return { checkedValues, onCheck };
};
