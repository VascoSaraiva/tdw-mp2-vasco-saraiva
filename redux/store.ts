import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./slices/tagsSlice";
import placesSlice from "./slices/placesSlice";
import tourDetailsSlice from "./slices/tourDetails";

export const store = configureStore({
  reducer: {
    tags: tagsSlice,
    places: placesSlice,
    details: tourDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
