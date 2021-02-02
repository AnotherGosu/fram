import styled from "styled-components/macro";

import { CircularProgress } from "@material-ui/core";

const CommonLoader = ({ fullPage = false }) => {
  return fullPage ? (
    <FullPageLoader>
      <CircularProgress />
    </FullPageLoader>
  ) : (
    <MainLoader>
      <CircularProgress />
    </MainLoader>
  );
};

export default CommonLoader;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullPageLoader = styled(Loader)`
  height: 100vh;
`;

const MainLoader = styled(Loader)`
  height: calc(100vh - 591.54px);
`;
