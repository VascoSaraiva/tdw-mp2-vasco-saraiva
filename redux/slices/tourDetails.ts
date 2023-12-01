import { createSlice } from "@reduxjs/toolkit";

export const tourDetailsSlice = createSlice({
  name: "details",
  initialState: {
    title: null,
    description: null,
  },
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload;
    },
    saveDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { saveTitle, saveDescription } = tourDetailsSlice.actions;

export default tourDetailsSlice.reducer;
