import { getReviews } from "@/api/reviews";

import { Card } from "./components/Card";

export const Reviews = async () => {
  const reviews = await getReviews();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {reviews.map((review) => (
        <Card
          key={review.id}
          {...review}
        />
      ))}
    </div>
  );
};
