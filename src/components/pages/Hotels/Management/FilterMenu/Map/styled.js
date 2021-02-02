import styled from "styled-components/macro";
import { commonLinkStyles } from "components/common/Link";

export const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 300px;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }

  .placemark-balloon-link {
    ${commonLinkStyles}
    font-family: "Rubik", sans-serif;
  }

  .placemark-balloon-address {
    font-family: "Rubik", sans-serif;
  }
`;
