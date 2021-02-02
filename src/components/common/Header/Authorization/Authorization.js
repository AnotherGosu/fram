import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { logOut } from "redux/slices/user";

import CommonLink from "components/common/Link";
import CommonLinkButton from "components/common/LinkButton";
import CommonButton from "components/common/Button";

const Authorization = ({ className }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Container className={className}>
      {isLoggedIn ? (
        <div className="button-container">
          <CommonButton text="Log out" action={logOut} />
        </div>
      ) : (
        <>
          <div className="link-container">
            <CommonLink to="/log-in" title="Log in" />
          </div>
          <div className="link-container">
            <CommonLinkButton text="Sign up" to="/sign-up" />
          </div>
        </>
      )}
    </Container>
  );
};

export default Authorization;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
`;
