import { Options, InputFields } from "./styled";
import { useState } from "react";

import CommonTextField from "components/common/TextField";

const options = ["visa", "mastercard", "paypal"];

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("visa");

  const selectPaymentOption = (event) =>
    setSelectedOption(event.target.dataset.type);

  return (
    <>
      <Options>
        {options.map((option) => (
          <li
            key={option}
            className={`option ${
              option === selectedOption ? "option_selected" : ""
            }`}
            data-type={option}
            onClick={selectPaymentOption}
          />
        ))}
      </Options>
      <InputFields>
        <CommonTextField
          name="cardholder-name"
          label="Cardholder name"
          placeholder="John Doe"
          className="cardholder-name"
        />
        <CommonTextField
          name="cvc"
          label="CVC"
          type="password"
          className="cvc"
        />
        <CommonTextField
          name="card-number"
          label="Card number"
          className="card-number"
        />
        <CommonTextField
          name="expiration-date"
          label="MM/YY"
          className="expiration-date"
        />
      </InputFields>
    </>
  );
};

export default PaymentOptions;
