import styled from "styled-components/macro";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .facilities {
    min-height: 20px;
    order: -1;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 15px;
    justify-content: space-between;
    align-items: flex-end;
  }

  .description {
    line-height: 2rem;
  }

  .options {
    display: flex;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
    display: block;

    @media screen and (max-width: 1225px) {
      height: auto;
    }
  }
`;
