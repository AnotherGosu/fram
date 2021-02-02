import styled from "styled-components/macro";

export const InputFields = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "email ."
    "phone .";
  row-gap: 25px;
  column-gap: 100px;
  margin: 25px 0 15px 0;

  .email {
    grid-area: email;
  }

  .phone {
    grid-area: phone;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: "email" "phone";
  }
`;
