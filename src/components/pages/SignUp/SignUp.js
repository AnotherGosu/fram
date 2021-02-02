import styled from "styled-components/macro";
import bgImage from "images/signUp-bg.jpg";
import { useEffect } from "react";

import RegistrationForm from "./RegistrationForm";
import CommonHero from "components/common/Hero";

const SignUp = () => {
  useEffect(() => (document.title = "Fram • Sign Up"), []);

  return (
    <PageContainer>
      <main className="form">
        <RegistrationForm />
      </main>
      <section className="hero">
        <CommonHero bgImage={bgImage} />
      </section>
    </PageContainer>
  );
};

export default SignUp;

const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "form hero";

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 4fr;
    grid-template-areas:
      "hero"
      "form";
  }

  .form {
    grid-area: form;
  }

  .hero {
    grid-area: hero;
  }
`;
