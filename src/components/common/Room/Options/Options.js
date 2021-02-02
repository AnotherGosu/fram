import styled from "styled-components/macro";
import { FaBed, FaBath } from "react-icons/fa";
import { IconContext } from "react-icons";

const Options = ({ beds, baths }) => {
  return (
    <Container>
      <IconContext.Provider value={{ size: "25px", color: "#1a1a1a" }}>
        <Option>
          <i>
            <FaBed />
          </i>
          <span>{`Beds: ${beds}`}</span>
        </Option>
        <Option>
          <i>
            <FaBath />
          </i>
          <span>{`Baths: ${baths}`}</span>
        </Option>
      </IconContext.Provider>
    </Container>
  );
};

export default Options;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
