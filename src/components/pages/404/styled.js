import styled from "styled-components/macro";
import bgImage from "images/404.jpg";

import CommonLinkButton from "components/common/LinkButton";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: center / cover no-repeat url(${bgImage});

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 150px;

  .code {
    font-size: 10em;
  }

  .text {
    font-size: 2em;
    font-weight: 500;
    line-height: 2.8rem;
    margin: 10px 0 25px 0;
  }

  .subtext {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1260px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 900px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
    font-size: 0.55rem;

    .subtext {
      font-size: 1.2rem;
    }
  }
`;

export const LinkButton = styled(CommonLinkButton)`
  width: max-content;
  background-color: transparent;
  color: var(--color-black);
  font-weight: 500;
  border: 1px solid #1a1a1a;
  margin-top: 15px;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-black);
  }
`;
