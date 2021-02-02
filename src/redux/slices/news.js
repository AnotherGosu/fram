import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  popularNews: [],
  status: "idle",
  error: null,
});

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await fetch("/api/fetchNews");
  const news = await response.json();

  return news;
});

const slice = createSlice({
  name: "news",
  initialState,
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNews.fulfilled]: (state, action) => {
      const news = action.payload;
      const popularNews = news.splice(0, 3);
      newsAdapter.setAll(state, news);
      state.popularNews = popularNews;
      state.status = "fulfilled";
    },
    [fetchNews.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
  },
});

export default slice.reducer;

//selectors
export const { selectAll: selectAllNews } = newsAdapter.getSelectors(
  (state) => state.news
);
