import styled from "styled-components/macro";

import BedsAndBaths from "./BedsAndBaths";
import RoomTypeSelect from "./RoomTypeSelect";

const Options = () => {
  return (
    <Container>
      <RoomTypeSelect />
      <BedsAndBaths name="beds" />
      <BedsAndBaths name="baths" />
    </Container>
  );
};

export default Options;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
