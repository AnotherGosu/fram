import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 3fr;
  row-gap: 50px;
  align-items: center;
  background-color: #ffffff;
  padding: 100px 0;

  .modal-authorization {
    flex-direction: column-reverse;
  }
`;
