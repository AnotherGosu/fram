import styled from "styled-components/macro";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 100px;
  margin-top: 25px;

  .hamburger-button {
    display: none;
    position: absolute;
    left: 20px;
  }

  .logo {
    color: var(--color-black);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
  }

  .header-nav {
    flex-basis: 40%;
  }

  @media screen and (max-width: 1350px) {
    padding: 20px 50px;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 0;
    justify-content: center;

    .header-authorization,
    .header-nav {
      display: none;
    }

    .hamburger-button {
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
  }
`;
