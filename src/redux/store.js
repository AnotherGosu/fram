import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./slices/hotels";
import roomsReducer from "./slices/rooms";
import searchParamsReducer from "./slices/searchParams";
import filterParamsReducer from "./slices/filterParams";
import userReducer from "./slices/user";
import showParamsReducer from "./slices/showParams";
import newsReducer from "./slices/news";
import reviewsReducer from "./slices/reviews";

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    rooms: roomsReducer,
    showParams: showParamsReducer,
    searchParams: searchParamsReducer,
    filterParams: filterParamsReducer,
    news: newsReducer,
    reviews: reviewsReducer,
    user: userReducer,
  },
});

export default store;
