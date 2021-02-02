import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  gap: 50px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .text {
    font-size: 0.8rem;
    color: var(--color-light-gray);
    font-weight: 500;
  }

  i {
    width: 20px;
    height: 20px;
  }
`;
