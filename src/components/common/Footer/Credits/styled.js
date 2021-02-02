import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .logo {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const Designer = styled.a`
  font-size: 0.8rem;
  margin: 10px 0;
  color: var(--color-white);
  opacity: 0.7;
  font-weight: 300;
`;

export const Socials = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-top: 20px;

  li:hover {
    opacity: 0.7;
  }
`;

export const Policies = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 300;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: var(--color-gray);
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;
