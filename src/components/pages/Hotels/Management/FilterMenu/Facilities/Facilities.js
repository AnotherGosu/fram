import styled from "styled-components/macro";
import { facilities } from "constants.js";

import Facility from "./Facility";

const Facilities = () => {
  return (
    <Container>
      {Object.keys(facilities).map((facility, index) => (
        <Facility name={facility} key={index} />
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
