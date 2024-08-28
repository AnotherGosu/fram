import { useState } from "react";

export const useComponent = ({
  defaultValue,
  callback,
}: {
  defaultValue: number;
  callback: (value: number) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  const onDecrement = () => {
    setValue(value - 1);
    callback(value - 1);
  };

  const onIncrement = () => {
    setValue(value + 1);
    callback(value + 1);
  };

  return { value, onDecrement, onIncrement };
};
