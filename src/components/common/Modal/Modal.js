import React, { useEffect, useState } from "react";

import CloseButton from "./CloseButton";
import { Container, Header, Children } from "./styled";

const Modal = ({ children, isModalOpen, toggleModal }) => {
  const [render, setRender] = useState(isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      setRender(true);
      const scrollBarWidth =
        window.innerWidth - window.document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const onAnimationEnd = () => {
    if (!isModalOpen) {
      setRender(false);
    }
  };

  return (
    render && (
      <Container
        style={{ animationName: `${isModalOpen ? "slideIn" : "slideOut"}` }}
        onAnimationEnd={onAnimationEnd}
      >
        <Header>
          <CloseButton onClick={toggleModal} />
        </Header>
        <Children>{children}</Children>
      </Container>
    )
  );
};

export default Modal;
