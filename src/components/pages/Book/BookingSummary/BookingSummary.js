import { Container, Price, PriceTax } from "./styled";

import CommonButton from "components/common/Button";
import CommonRoom from "components/common/Room";

const BookingSummary = ({ room = {} }) => {
  const { price = 0 } = room;
  const tax = Number((price * 0.05).toFixed(2));
  const total = price + tax;

  return (
    <Container>
      <CommonRoom {...room} />
      <article>
        <Price>
          <h3>Subtotal</h3>
          <span className="value">{`${price} €`}</span>
        </Price>

        <PriceTax>
          <h4>Sevice tax</h4>
          <span className="value">{`${tax} €`}</span>
        </PriceTax>
      </article>
      <article>
        <Price>
          <h3>Total</h3>
          <span className="value">{`${total} €`}</span>
        </Price>
      </article>
      <CommonButton text="Pay now" className="book-button" />
    </Container>
  );
};

export default BookingSummary;
