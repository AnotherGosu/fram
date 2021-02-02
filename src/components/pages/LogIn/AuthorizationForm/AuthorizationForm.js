import { Section, Form, Options } from "./styled";
import {
  logIn,
  setUserInfo,
  setRememberMe,
  selectRememberMe,
} from "redux/slices/user";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import CommonTextField from "components/common/TextField";
import CommonCheckBox from "components/common/CheckBox";
import CommonLink from "components/common/Link";
import CommonTextButton from "components/common/Button";

const AuthorizationForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { state } = location;
  const { from } = state || { from: { pathname: "/" } };

  const onLogInButtonClick = () => {
    dispatch(logIn());
    state ? history.push(from) : history.goBack();
  };

  return (
    <Section>
      <h1>Authorization</h1>
      <Form>
        <CommonTextField
          name="email"
          label="Email"
          placeholder="hereismyemail@gmail.com"
          type="email"
          autoFocus
          action={(value) => setUserInfo({ type: "email", value })}
          selector={(state) => state.user.email}
        />
        <CommonTextField
          name="password"
          label="Password"
          type="password"
          action={(value) => setUserInfo({ type: "password", value })}
          selector={(state) => state.user.password}
        />
        <CommonTextButton text="Log in" onClick={onLogInButtonClick} />
      </Form>
      <Options>
        <CommonCheckBox
          name="remember-me"
          action={setRememberMe}
          selector={selectRememberMe}
          label="Remember me"
        />
        <CommonLink to="/sign-up" title="Sign up" />
      </Options>
    </Section>
  );
};

export default AuthorizationForm;
