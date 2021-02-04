import styled from "styled-components/macro";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import CommonHeader from "../Header";
import CommonFooter from "../Footer";
import CommonPageLoader from "components/common/Loader";

const CommonPageContainer = ({ children, slice = "", title = "" }) => {
  const status = useSelector((state) =>
    slice ? state[slice].status : "fulfilled"
  );

  useEffect(() => {
    document.title = title ? `Fram • ${title}` : "Fram";
  }, [title]);

  return (
    <>
      <CommonHeader />
      <Main>{status !== "fulfilled" ? <CommonPageLoader /> : children}</Main>
      <CommonFooter />
    </>
  );
};

export default CommonPageContainer;

const Main = styled.main`
  padding: 50px 100px 100px 100px;

  @media screen and (max-width: 1350px) {
    padding: 50px 50px 100px 50px;
  }

  @media screen and (max-width: 900px) {
    padding: 50px 20px 100px 20px;
  }
`;
