import { InputFields } from "./styled";
import { setTerms } from "redux/slices/user";

import CommonTextField from "components/common/TextField";
import CommonCheckBox from "components/common/CheckBox";

const selectTerms = (state) => state.user.terms;

const ContactInfo = () => {
  return (
    <>
      <InputFields>
        <CommonTextField
          name="email"
          label="Email"
          type="email"
          placeholder="hereismyemail@gmail.com"
          className="email"
          selector={(state) => state.user.email}
        />
        <CommonTextField
          name="phone"
          label="Phone number"
          type="email"
          placeholder="089 674 7121"
          className="phone"
          selector={(state) => state.user.phone}
        />
      </InputFields>
      <CommonCheckBox
        name="terms-and-conditions"
        label="I accept terms and conditions"
        selector={selectTerms}
        action={setTerms}
      />
    </>
  );
};

export default ContactInfo;
