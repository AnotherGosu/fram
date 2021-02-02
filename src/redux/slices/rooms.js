import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { filterRoomsByParams } from "../utils/rooms";
import { fetchHotels } from "./hotels";

const roomsAdapter = createEntityAdapter({
  selectId: (entity) => entity[0].hotelId,
});

const initialState = roomsAdapter.getInitialState({
  filteredRooms: {},
  status: "idle",
  error: null,
});

export const filterRooms = createAsyncThunk(
  "rooms/filterRooms",
  async (_, { getState }) => {
    const filterParams = getState().filterParams;
    const rooms = selectAllRooms(getState());
    return filterRoomsByParams(rooms, filterParams);
  }
);

const slice = createSlice({
  name: "rooms",
  initialState,
  extraReducers: {
    [filterRooms.pending]: (state) => {
      state.status = "pending";
    },
    [filterRooms.fulfilled]: (state, action) => {
      const filteredRooms = action.payload;
      state.filteredRooms = filteredRooms;
      state.status = "fulfilled";
    },
    [filterRooms.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
    [fetchHotels.fulfilled]: (state, action) => {
      const { hotels, filterParams } = action.payload;
      if (hotels.length) {
        const rooms = hotels.map((hotel) => hotel.rooms);
        const filteredRooms = filterRoomsByParams(rooms, filterParams);
        roomsAdapter.setAll(state, rooms);
        state.filteredRooms = filteredRooms;
      }
    },
  },
});

export default slice.reducer;

//selectors
export const {
  selectAll: selectAllRooms,
  selectById: selectRoomsByHotelId,
  selectIds: selectRoomsIds,
} = roomsAdapter.getSelectors((state) => state.rooms);

export const selectFilteredRoomsByHotelId = createSelector(
  (state) => state.rooms.filteredRooms,
  (_, hotelId) => hotelId,
  (filteredRooms, hotelId) => filteredRooms[hotelId]
);

export const selectRoomById = createSelector(
  (state) => state,
  (_, hotelId) => hotelId,
  (_, __, roomId) => roomId,
  (state, hotelId, roomId) => {
    const rooms = selectRoomsByHotelId(state, hotelId);
    return rooms.filter((room) => room.id === roomId).pop();
  }
);
