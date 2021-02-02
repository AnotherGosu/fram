import styled from "styled-components/macro";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  row-gap: 25px;
  padding: 0 5vw;

  h1 {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  max-width: 550px;
`;

export const Options = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
