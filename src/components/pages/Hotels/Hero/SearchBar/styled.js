import styled from "styled-components/macro";

export const Form = styled.form`
  display: grid;
  grid-template-areas: "city in out capacity btn";
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  background-color: var(--color-white);
  margin: 50px 0;
  padding: 20px;
  border-radius: 8px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "city capacity"
      "in out"
      "btn btn";
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "city"
      "in"
      "out"
      "capacity"
      "btn";
  }

  .city {
    grid-area: city;
  }

  .check-in {
    grid-area: in;
  }

  .check-out {
    grid-area: out;
  }

  .capacity {
    grid-area: capacity;
  }

  .search-button {
    grid-area: btn;
  }
`;
