import styled from "styled-components/macro";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-areas:
    "gallery info"
    "rooms rooms";
  column-gap: 100px;
  row-gap: 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "info"
      "gallery"
      "rooms";
  }

  .gallery {
    grid-area: gallery;
  }

  .info {
    grid-area: info;
  }

  .rooms {
    grid-area: rooms;
    margin-top: 25px;
  }

  h2 {
    font-size: 2rem;
  }
`;
