import { Grid, DataInputs } from "./styled";
import { useSelector } from "react-redux";
import { selectRoomById } from "redux/slices/rooms";
import { useParams } from "react-router-dom";
import useHotelFetch from "hooks/useHotelFetch";

import CommonPageContainer from "components/common/PageContainer";
import PaymentOptions from "./PaymentOptions";
import ContactInfo from "./ContactInfo";
import BookingSummary from "./BookingSummary";

const Book = () => {
  const { hotelId, roomId } = useParams();
  const room = useSelector((state) => selectRoomById(state, hotelId, roomId));

  useHotelFetch(hotelId, room);

  return (
    <CommonPageContainer title="Book" slice="hotels">
      <Grid>
        <DataInputs>
          <section>
            <h2>Payment options</h2>
            <PaymentOptions />
          </section>
          <section>
            <h2>Contact info</h2>
            <ContactInfo />
          </section>
        </DataInputs>
        <div>
          <section>
            <h2>Booking summary</h2>
            <BookingSummary room={room} />
          </section>
        </div>
      </Grid>
    </CommonPageContainer>
  );
};

export default Book;
