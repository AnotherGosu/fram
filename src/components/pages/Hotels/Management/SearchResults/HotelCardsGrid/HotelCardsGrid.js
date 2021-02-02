import styled from "styled-components/macro";

import HotelCard from "./HotelCard";
import NoResult from "./NoResult";

const HotelCardsGrid = ({ hotels }) => {
  return !!hotels.length ? (
    <Grid>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </Grid>
  ) : (
    <NoResult />
  );
};

export default HotelCardsGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;
