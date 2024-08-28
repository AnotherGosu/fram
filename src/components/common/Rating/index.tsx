import { Star } from "lucide-react";

import { cn } from "@/utils/cn";

import { generateKeys } from "@/lib";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
}

export const Rating = ({ rating, className, ...props }: RatingProps) => {
  const keys = generateKeys(rating);

  return (
    <div
      className="flex gap-1"
      {...props}
    >
      {keys.map((key) => (
        <Star
          key={key}
          className={cn("size-4 fill-slate-950", className)}
        />
      ))}
    </div>
  );
};
