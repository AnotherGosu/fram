import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 500;
  text-transform: capitalize;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 50px;
  height: 40px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #1a1a1a;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 5px;

  &[disabled] {
    opacity: 0.5;
  }

  &:active {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
