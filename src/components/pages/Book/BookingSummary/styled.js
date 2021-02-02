import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .book-button {
    width: max-content;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1rem;
  }

  .value {
    font-weight: 500;
  }
`;

export const PriceTax = styled(Price)`
  opacity: 0.7;
  margin-top: 15px;
`;
