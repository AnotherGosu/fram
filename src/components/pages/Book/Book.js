import { Grid, DataInputs } from "./styled";

import CommonPageContainer from "components/common/PageContainer";
import PaymentOptions from "./PaymentOptions";
import ContactInfo from "./ContactInfo";
import BookingSummary from "./BookingSummary";

const Book = () => {
  return (
    <CommonPageContainer title="Book">
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
            <BookingSummary />
          </section>
        </div>
      </Grid>
    </CommonPageContainer>
  );
};

export default Book;
