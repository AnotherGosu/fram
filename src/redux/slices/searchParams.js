import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  checkIn: null,
  checkOut: null,
  capacity: "",
};

const slice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setSearchParam(state, action) {
      const { param, value } = action.payload;
      state[param] = value;
    },
  },
});

export const { setSearchParam } = slice.actions;

export default slice.reducer;
