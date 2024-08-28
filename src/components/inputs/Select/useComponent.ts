import { useState } from "react";

export const useComponent = ({
  defaultValue,
  callback,
}: {
  defaultValue: string;
  callback: (value: string) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (newValue: string) => {
    setValue(newValue === "empty" ? "" : newValue);
    callback(newValue === "empty" ? "" : newValue);
  };

  return { value, onChange };
};
