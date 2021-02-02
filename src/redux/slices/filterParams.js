import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getAbsoluteMinMaxPrice, getNewPrices } from "../utils/filterParams";
import { fetchHotels } from "./hotels";

const initialState = {
  prices: {
    absoluteMinPrice: 0,
    absoluteMaxPrice: 0,
    currentMinPrice: 0,
    currentMaxPrice: 0,
  },
  options: {
    type: "",
    beds: 0,
    baths: 0,
  },
  facilities: {
    tv: false,
    internet: false,
    kitchen: false,
    gym: false,
  },
};

const slice = createSlice({
  name: "filterParams",
  initialState,
  reducers: {
    setPrices(state, action) {
      const {
        currentMinPrice: prevMinPrice,
        currentMaxPrice: prevMaxPrice,
        absoluteMinPrice,
        absoluteMaxPrice,
      } = state.prices;
      const {
        type = "",
        currentMinPrice = prevMinPrice,
        currentMaxPrice = prevMaxPrice,
      } = action.payload;
      const prices = {
        currentMinPrice,
        currentMaxPrice,
        absoluteMinPrice,
        absoluteMaxPrice,
        prevMinPrice,
        prevMaxPrice,
      };
      const { newMinPrice, newMaxPrice } = getNewPrices(type, prices);
      state.prices.currentMinPrice = newMinPrice;
      state.prices.currentMaxPrice = newMaxPrice;
    },
    setOptions(state, action) {
      const { name, value } = action.payload;
      state.options[name] = value;
    },
    setFacilities(state, action) {
      const name = action.payload;
      state.facilities[name] = !state.facilities[name];
    },
  },
  extraReducers: {
    [fetchHotels.pending]: (state) => {
      state.prices.currentMinPrice = 0;
      state.prices.currentMaxPrice = 0;
    },
    [fetchHotels.fulfilled]: (state, action) => {
      const { hotels } = action.payload;
      const { absoluteMinPrice, absoluteMaxPrice } = getAbsoluteMinMaxPrice(
        hotels
      );
      state.prices = {
        absoluteMinPrice,
        absoluteMaxPrice,
        currentMinPrice: absoluteMinPrice,
        currentMaxPrice: absoluteMaxPrice,
      };
    },
  },
});

export const { setPrices, setOptions, setFacilities } = slice.actions;

export default slice.reducer;

//selectors
export const selectFacility = createSelector(
  (state) => state.filterParams.facilities,
  (_, name) => name,
  (facilities, name) => facilities[name]
);

export const selectOption = createSelector(
  (state) => state.filterParams.options,
  (_, name) => name,
  (options, name) => options[name]
);

export const selectAbsolutePrices = createSelector(
  (state) => state.filterParams.prices.absoluteMinPrice,
  (state) => state.filterParams.prices.absoluteMaxPrice,
  (absoluteMinPrice, absoluteMaxPrice) => [absoluteMinPrice, absoluteMaxPrice]
);
