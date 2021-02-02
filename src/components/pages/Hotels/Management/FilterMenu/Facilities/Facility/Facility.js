import styled from "styled-components/macro";
import { setFacilities, selectFacility } from "redux/slices/filterParams";

import CommonCheckBox from "components/common/CheckBox";

const Facility = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <CommonCheckBox
        action={() => setFacilities(name)}
        selector={(state) => selectFacility(state, name)}
        name={`${name}-checkbox`}
        label=""
      />
    </Container>
  );
};

export default Facility;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 500;
  text-transform: capitalize;
`;
