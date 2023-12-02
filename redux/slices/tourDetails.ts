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
    resetDetails: (state) => {
      return {
        title: null,
        description: null
      }
    }
  },
});

export const { saveTitle, saveDescription, resetDetails } = tourDetailsSlice.actions;

export default tourDetailsSlice.reducer;
