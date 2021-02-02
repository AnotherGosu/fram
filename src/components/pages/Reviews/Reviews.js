import { ReviewsGrid } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, selectAllReviews } from "redux/slices/reviews";

import CommonPageContainer from "components/common/PageContainer";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const dispatch = useDispatch();

  const reviews = useSelector(selectAllReviews);

  useEffect(() => {
    if (!reviews.length) dispatch(fetchReviews());
  }, [reviews, dispatch]);

  return (
    <CommonPageContainer slice="reviews" title="Reviews">
      <section>
        <h2>Reviews</h2>
        <ReviewsGrid>
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </ReviewsGrid>
      </section>
    </CommonPageContainer>
  );
};

export default Reviews;
