import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import CommonPageContainer from "components/common/PageContainer";
import Hero from "./Hero";
import Management from "./Management";

const Hotels = () => {
  const status = useSelector((state) => state.showParams.status);
  const managementScrollRef = useRef(null);

  useEffect(() => {
    if (status !== "idle" && managementScrollRef.current)
      managementScrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [status]);

  return (
    <CommonPageContainer>
      <Hero />
      {status === "idle" ? null : <Management ref={managementScrollRef} />}
    </CommonPageContainer>
  );
};

export default Hotels;
