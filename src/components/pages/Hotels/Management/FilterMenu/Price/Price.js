import styled from "styled-components/macro";

import MaxPriceInput from "./MaxPriceInput";
import MinPriceInput from "./MinPriceInput";
import PriceSlider from "./PriceSlider";

const Price = () => {
  return (
    <Container>
      <div className="inputs">
        <MinPriceInput />
        <MaxPriceInput />
      </div>
      <div className="slider">
        <PriceSlider />
      </div>
    </Container>
  );
};

export default Price;

const Container = styled.div`
  .inputs {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
  }

  .slider {
    margin-top: 25px;
  }
`;
