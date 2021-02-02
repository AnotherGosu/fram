import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const reviewsAdapter = createEntityAdapter();

const initialState = reviewsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const response = await fetch("/api/fetchReviews");
    const reviews = await response.json();

    return reviews;
  }
);

const slice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.status = "pending";
    },
    [fetchReviews.fulfilled]: (state, action) => {
      const reviews = action.payload;
      reviewsAdapter.setAll(state, reviews);
      state.status = "fulfilled";
    },
    [fetchReviews.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
  },
});

export default slice.reducer;

//selectors
export const { selectAll: selectAllReviews } = reviewsAdapter.getSelectors(
  (state) => state.reviews
);
