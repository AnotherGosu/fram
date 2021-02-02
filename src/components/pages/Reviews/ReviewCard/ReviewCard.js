import {
  Article,
  ImagesContainer,
  Image,
  LeftImage,
  RightImage,
} from "./styled";

import Details from "./Details";
import { Link } from "react-router-dom";

const ReviewCard = ({ title = "", description = "", images = [], id = "" }) => {
  return (
    <Article>
      <Details />
      <h3>{title}</h3>
      <ImagesContainer>
        <LeftImage bgImage={images[0]} />
        <Image bgImage={images[1]} />
        <Link to={`/reviews/${id}`} className="image-link">
          <RightImage bgImage={images[2]} />
        </Link>
      </ImagesContainer>
      <p className="description">{description}</p>
    </Article>
  );
};

export default ReviewCard;
