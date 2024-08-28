import { useState } from "react";

import { generateKeys } from "@/lib";

import { useSearchParamInput } from "@/hooks/useSearchParamInput";

export const useComponent = () => {
  const { defaultValue, onChange } = useSearchParamInput("rating", "0");

  const [value, setValue] = useState(Number(defaultValue));
  const [hoveredValue, setHoveredValue] = useState(0);

  const onRatingChange = (rating: number) => {
    if (value === rating) {
      setValue(0);

      onChange("");
    } else {
      setValue(rating);

      onChange(String(rating));
    }
  };

  const onHoveredRatingChange = (rating: number) => {
    setHoveredValue(rating);
  };

  const ratings = generateKeys(5, 1);

  return {
    value,
    hoveredValue,
    onRatingChange,
    onHoveredRatingChange,
    ratings,
  };
};
