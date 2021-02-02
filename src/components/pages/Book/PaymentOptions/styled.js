import styled from "styled-components/macro";
import visaImg from "images/visa-logo.svg";
import mastercardImg from "images/mastercard-logo.svg";
import paypalImg from "images/paypal-logo.svg";

export const InputFields = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  row-gap: 25px;
  column-gap: 100px;
  grid-template-areas:
    "name   cvc"
    "number date";

  .cardholder-name {
    grid-area: name;
  }
  .cvc {
    grid-area: cvc;
  }
  .card-number {
    grid-area: number;
  }
  .expiration-date {
    grid-area: date;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: "number" "name" "date" "cvc";
  }
`;

export const Options = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  margin: 25px 0;

  @media screen and (max-width: 600px) {
    gap: 0;
    justify-content: space-between;
  }

  .option {
    position: relative;
    cursor: pointer;
    width: 150px;
    height: 100px;

    @media screen and (max-width: 600px) {
      width: 100px;
      height: 100px;
    }

    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 0;
      background: darkgray;
      transition: 0.3s ease;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }

    &:hover {
      &::before,
      &::after {
        width: 50%;
      }
    }

    &_selected {
      &::before,
      &::after {
        width: 50%;
      }
    }

    &[data-type="visa"] {
      background: center / contain no-repeat url(${visaImg});
    }

    &[data-type="mastercard"] {
      background: center / contain no-repeat url(${mastercardImg});
    }

    &[data-type="paypal"] {
      background: center / contain no-repeat url(${paypalImg});
    }
  }
`;
