import { useState } from "react";

export const useComponent = ({
  defaultValue,
  callback,
}: {
  defaultValue: boolean;
  callback: (value: boolean) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = () => {
    setValue(!value);
    callback(!value);
  };

  return { value, onChange };
};
