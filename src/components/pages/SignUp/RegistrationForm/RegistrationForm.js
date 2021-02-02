import { Section, Form, Options } from "./styled";
import {
  signUp,
  setUserInfo,
  setRememberMe,
  selectRememberMe,
} from "redux/slices/user";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import CommonTextField from "components/common/TextField";
import CommonCheckBox from "components/common/CheckBox";
import CommonButton from "components/common/Button";
import CommonLink from "components/common/Link";

const RegistrationForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { state } = location;
  const { from } = state || { from: { pathname: "/" } };

  const onSignUpButtonCLick = () => {
    dispatch(signUp());
    state ? history.push(from) : history.goBack();
  };

  return (
    <Section>
      <h1>Registration</h1>
      <Form>
        <CommonTextField
          name="name"
          label="Name"
          placeholder="John Doe"
          autoFocus
          action={(value) => setUserInfo({ type: "name", value })}
        />
        <CommonTextField
          name="phone"
          label="Phone number"
          placeholder="089 674 71 21"
          type="tel"
          action={(value) => setUserInfo({ type: "phone", value })}
        />
        <CommonTextField
          name="email"
          label="Email"
          placeholder="hereismyemail@gmail.com"
          type="email"
          action={(value) => setUserInfo({ type: "email", value })}
        />
        <CommonTextField
          name="password"
          label="Password"
          type="password"
          action={(value) => setUserInfo({ type: "password", value })}
        />
        <CommonButton text="Sign up" onClick={onSignUpButtonCLick} />
      </Form>
      <Options>
        <CommonCheckBox
          name="remember-me"
          action={setRememberMe}
          selector={selectRememberMe}
          label="Remember me"
        />
        <CommonLink to="/log-in" title="Log in" />
      </Options>
    </Section>
  );
};

export default RegistrationForm;
