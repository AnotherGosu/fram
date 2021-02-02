import { Container, Price, PriceTax } from "./styled";
import { useSelector } from "react-redux";
import { selectRoomById } from "redux/slices/rooms";
import { useParams } from "react-router-dom";

import CommonButton from "components/common/Button";
import CommonRoom from "components/common/Room";

const BookingSummary = () => {
  const { hotelId, roomId } = useParams();
  const room = useSelector((state) => selectRoomById(state, hotelId, roomId));

  const { price } = room;
  const tax = price * 0.05;
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
