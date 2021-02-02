import { Article } from "./styled";

import Facilities from "./Facilities";
import Available from "./Available";
import Gallery from "./Gallery";
import Options from "./Options";
import BookButton from "./BookButton";

const CommonRoom = ({
  type = "",
  facilities = [],
  images = [],
  price = 0,
  beds = 0,
  baths = 0,
  checkIn = "",
  checkOut = "",
  id = "",
  showBookBtn = false,
}) => {
  return (
    <Article>
      <div className="title">
        <h3>{type}</h3>
        <Available checkIn={checkIn} checkOut={checkOut} />
      </div>
      <div className="facilities">
        <Facilities facilities={facilities} />
      </div>
      <Gallery images={images} type={type} />
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="options">
        <Options beds={beds} baths={baths} />
        {showBookBtn && <BookButton price={price} id={id} />}
      </div>
    </Article>
  );
};

export default CommonRoom;
