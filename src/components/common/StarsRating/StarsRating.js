import styled from "styled-components/macro";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

const CommonStarsRating = ({ rating = 1 }) => {
  const stars = [...Array(rating).keys()];

  return (
    <div>
      <IconContext.Provider value={{ size: "15px", color: "#1A1A1A" }}>
        {stars.map((index) => (
          <Icon key={index}>
            <FaStar />
          </Icon>
        ))}
      </IconContext.Provider>
    </div>
  );
};

export default CommonStarsRating;

const Icon = styled.i`
  width: 15px;
  height: 15px;
  margin: 0 2px;
`;
