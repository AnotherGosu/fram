import { PageContainer, Section, LinkButton } from "./styled";

const NotFound = () => {
  return (
    <PageContainer>
      <Section>
        <h1 className="hidden">Page not found</h1>
        <span className="code">404</span>
        <span className="text">
          The page you are requesting does not exist.
          <br /> But you found this beautiful place.
        </span>
        <span className="subtext">Don't rush and enjoy the view.</span>
        <LinkButton to="/hotels" text="Return home" />
      </Section>
    </PageContainer>
  );
};

export default NotFound;
