import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
  animation-timing-function: ease;
  background-color: var(--color-white);

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 25px 15px 0;
  border-bottom: 1px solid var(--color-gray);
`;

export const Children = styled.div`
  height: calc(100% - 51px);
`;
