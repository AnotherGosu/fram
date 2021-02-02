import { Section } from "./styled";
import React from "react";

import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <Section>
      <h1 className="title">The best hotels of Norway</h1>
      <p className="advantage">
        Explore the beauty of Scandinavia and stay in comfortable place
      </p>
      <SearchBar />
    </Section>
  );
};

export default React.memo(Hero);
