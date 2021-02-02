import styled from "styled-components/macro";

import Map from "./Map";
import Price from "./Price";
import Options from "./Options";
import Facilities from "./Facilities";

const FilterMenu = () => {
  return (
    <Container>
      <section>
        <h3>Map</h3>
        <Map />
      </section>
      <section>
        <h3>Price</h3>
        <Price />
      </section>
      <section>
        <h3>Options</h3>
        <Options />
      </section>
      <section>
        <h3>Facilities</h3>
        <Facilities />
      </section>
    </Container>
  );
};

export default FilterMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 30px;
  }
`;
