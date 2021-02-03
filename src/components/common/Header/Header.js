import { Header } from "./styled";
import React from "react";
import useToggle from "hooks/useToggle";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import CommonIconButton from "components/common/IconButton";
import Navigation from "./Navigation";
import Authorization from "./Authorization";
import ModalMenu from "./ModalMenu";

const CommonHeader = () => {
  const [isModalOpen, toggleModal] = useToggle();

  return (
    <Header>
      <CommonIconButton
        size="25px"
        color="#1a1a1a"
        Icon={<GiHamburgerMenu />}
        onClick={toggleModal}
        className="hamburger-button"
      />
      <Link to="/hotels" className="logo">
        Fram
      </Link>
      <Navigation className="header-nav" />
      <Authorization className="header-authorization" />
      <ModalMenu toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </Header>
  );
};

export default React.memo(CommonHeader);
