import { Article, Preview, Badge, Info } from "./styled";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";

import CommonStarsRating from "components/common/StarsRating";

const HotelCard = (props) => {
  const { id, images, name, city, address, rating, minRoomPrice } = props;
  const previewImage = images[0];
  const history = useHistory();

  const onHotelCardClick = () => {
    history.push(`/hotels/${id}`);
  };

  return (
    <Article onClick={onHotelCardClick}>
      <Preview bgImage={previewImage}>
        <Badge>{`${minRoomPrice}€ per day`}</Badge>
      </Preview>
      <Info>
        <h3>{name}</h3>
        <span>
          <IconContext.Provider value={{ size: "15px", color: "#1A1A1A" }}>
            <i className="location-icon">
              <FaMapMarkerAlt />
            </i>
          </IconContext.Provider>
          {`${city}, ${address}`}
        </span>
        <CommonStarsRating rating={rating} />
      </Info>
    </Article>
  );
};

export default HotelCard;
