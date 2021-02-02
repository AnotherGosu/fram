import styled from "styled-components/macro";
import React from "react";

import Credits from "./Credits";
import Contacts from "./Contacts";
import Menu from "./Menu";

const CommonFooter = () => {
  return (
    <Footer>
      <section>
        <h2 className="hidden">Credits</h2>
        <Credits />
      </section>
      <section>
        <h2>Contacts</h2>
        <Contacts />
      </section>
      <section>
        <h2>Menu</h2>
        <Menu />
      </section>
    </Footer>
  );
};

export default React.memo(CommonFooter);

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 50px;
  padding: 50px 0 50px 200px;
  background-color: var(--color-black);
  color: var(--color-gray);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1350px) {
    padding: 50px 0 50px 150px;
  }

  @media screen and (max-width: 900px) {
    padding: 50px 0 50px 50px;
  }
`;
