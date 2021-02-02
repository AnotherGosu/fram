import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  rememberMe: false,
  isLoggedIn: false,
  terms: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      const { type, value } = action.payload;
      state[type] = value;
    },
    setRememberMe(state) {
      state.rememberMe = !state.rememberMe;
    },
    setTerms(state) {
      state.terms = !state.terms;
    },
    logOut(state) {
      state.isLoggedIn = false;
      if (!state.rememberMe) {
        state.email = "";
        state.password = "";
      }
    },
    logIn(state) {
      state.isLoggedIn = true;
    },
    signUp(state) {
      state.isLoggedIn = true;
    },
  },
});

export const {
  setUserInfo,
  setRememberMe,
  setTerms,
  logOut,
  logIn,
  signUp,
} = slice.actions;

export default slice.reducer;

//selectors
export const selectRememberMe = createSelector(
  (state) => state.user.rememberMe,
  (rememberMe) => rememberMe
);
