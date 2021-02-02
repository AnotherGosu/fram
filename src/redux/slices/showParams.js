import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotels } from "./hotels";
import { filterRooms } from "./rooms";

export const setShowParams = createAsyncThunk(
  "hotels/setShowParams",
  async (param) => param
);

const slice = createSlice({
  name: "showParams",
  initialState: {
    status: "idle",
    hotelName: "",
    sortType: "",
    currentPage: 1,
  },
  extraReducers: {
    [setShowParams.pending]: (state) => {
      state.status = "pending";
    },
    [setShowParams.fulfilled]: (state, action) => {
      const { type, value } = action.payload;
      state[type] = value;
      if (type !== "currentPage") state.currentPage = 1;
      state.status = "fulfilled";
    },
    [fetchHotels.pending]: (state) => {
      state.status = "pending";
    },
    [fetchHotels.fulfilled]: (state) => {
      state.currentPage = 1;
      state.status = "fulfilled";
    },
    [filterRooms.pending]: (state) => {
      state.status = "pending";
    },
    [filterRooms.fulfilled]: (state) => {
      state.currentPage = 1;
      state.status = "fulfilled";
    },
  },
});

export default slice.reducer;
