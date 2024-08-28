import { useSearchParamInput } from "@/hooks/useSearchParamInput";

export const useComponent = (maxPrice: string) => {
  const { defaultValue: stringDefaultValue, onChange } = useSearchParamInput(
    "price",
    `0,${maxPrice}`,
  );

  const callback = (value: number[]) => {
    onChange(value.join(","));
  };

  const defaultValue = stringDefaultValue
    .split(",")
    .map((value) => Number(value));

  return { defaultValue, callback };
};
