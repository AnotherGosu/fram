import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { sortHotelsBySortType } from "../utils/hotels";

const hotelsAdapter = createEntityAdapter();

const initialState = hotelsAdapter.getInitialState({
  status: "idle",
  firstFetch: false,
  error: null,
});

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (hotelId = null, { getState }) => {
    const searchParams = getState().searchParams;
    const filterParams = getState().filterParams;

    const response = await fetch("/api/fetchHotels", {
      method: "POST",
      body: JSON.stringify({ searchParams, hotelId }),
    });

    const hotels = await response.json();

    return { hotels, filterParams };
  }
);

const slice = createSlice({
  name: "hotels",
  initialState,
  extraReducers: {
    [fetchHotels.pending]: (state) => {
      state.status = "pending";
    },
    [fetchHotels.fulfilled]: (state, action) => {
      const { hotels } = action.payload;
      hotelsAdapter.setAll(state, hotels);
      state.status = "fulfilled";
      state.firstFetch = true;
    },
    [fetchHotels.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
  },
});

export default slice.reducer;

//selectors
export const {
  selectAll: selectAllHotels,
  selectById: selectHotelById,
  selectIds: selectHotelsIds,
} = hotelsAdapter.getSelectors((state) => state.hotels);

export const selectFilteredHotels = createSelector(
  (state) => state.hotels.entities,
  (state) => state.rooms.filteredRooms,
  (state) => state.showParams.sortType,
  (state) => state.showParams.hotelName,
  (entities, filteredRooms, sortType, hotelName) => {
    const hotelsIds = Object.keys(filteredRooms);
    let hotels = Object.values(entities);

    if (hotelName) {
      hotels = hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(hotelName)
      );
    }

    const sortedHotels = sortHotelsBySortType(hotels, sortType);

    const filteredHotels = sortedHotels.filter((hotel) =>
      hotelsIds.includes(hotel.id)
    );

    return filteredHotels;
  }
);

export const selectHotelsOnMap = createSelector(
  (state) => selectFilteredHotels(state),
  (filteredHotels) =>
    filteredHotels.map((hotel) => ({
      name: hotel.name,
      city: hotel.city,
      location: hotel.location,
      address: hotel.address,
      id: hotel.id,
    }))
);
