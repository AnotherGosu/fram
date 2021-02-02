import styled from "styled-components/macro";
import { facilitiesNames } from "constants.js";

import Facility from "./Facility";

const Facilities = () => {
  return (
    <Container>
      {facilitiesNames.map((name, index) => (
        <Facility name={name} key={index} />
      ))}
    </Container>
  );
};

export default Facilities;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
