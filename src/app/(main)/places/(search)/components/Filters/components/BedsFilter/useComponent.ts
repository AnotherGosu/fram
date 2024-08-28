import { useSearchParamInput } from "@/hooks/useSearchParamInput";

export const useComponent = () => {
  const { defaultValue, onChange } = useSearchParamInput("beds", "0");

  const callback = (value: number) => {
    value ? onChange(String(value)) : onChange("");
  };

  return { defaultValue, callback };
};
