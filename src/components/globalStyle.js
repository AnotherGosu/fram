import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #1a1a1a;
    --color-white: #ffffff;
    --color-gray: #ebebeb;
    --transition-main: 0.3s ease;
    --shadow-active-1: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
    background-color: var(--color-white);
    color: var(--color-black);
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  h1 {
    font-size: 3.4rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1rem;
  }

  ul {
    list-style: none;
  }

  address {
    font-style: unset;
  }

  .hidden {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  
`;
