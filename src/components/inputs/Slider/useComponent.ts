import { useState } from "react";

export const useComponent = (defaultValue: number[]) => {
  const [value, setValue] = useState(defaultValue);

  const onValueChange = (value: number[]) => {
    setValue(value);
  };

  return { value, onValueChange };
};
