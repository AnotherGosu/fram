"use client";

import { Star } from "lucide-react";

import { cn } from "@/utils/cn";

import { useComponent } from "./useComponent";

export const RatingFilter = () => {
  const {
    value,
    hoveredValue,
    onRatingChange,
    onHoveredRatingChange,
    ratings,
  } = useComponent();

  return (
    <div
      onMouseLeave={() => onHoveredRatingChange(0)}
      className="flex gap-1"
      data-test="rating-filter"
    >
      {ratings.map((rating) => {
        const isActive = rating <= value;
        const isHovered = !isActive && rating <= hoveredValue;

        return (
          <button
            key={rating}
            type="button"
            onClick={() => onRatingChange(rating)}
            onMouseEnter={() => onHoveredRatingChange(rating)}
          >
            <Star
              className={cn("size-6 fill-stone-100 transition", {
                "fill-slate-950": isActive,
                "fill-slate-800": isHovered,
              })}
            />
          </button>
        );
      })}
    </div>
  );
};
