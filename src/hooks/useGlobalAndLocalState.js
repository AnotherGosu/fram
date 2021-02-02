import { useState, useRef, useEffect } from "react";

export default function useGlobalAndLocalState(value) {
  const [tempValue, setTempValue] = useState(value);

  const prevTempValue = useRef(tempValue);

  useEffect(() => {
    if (tempValue !== prevTempValue.current) {
      setTempValue(tempValue); //local state changed
    } else if (tempValue !== value) {
      setTempValue(value); //global state changed
    }
    prevTempValue.current = tempValue;
  }, [value, tempValue]);

  return [tempValue, setTempValue];
}
