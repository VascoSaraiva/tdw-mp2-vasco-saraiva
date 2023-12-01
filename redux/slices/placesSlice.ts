import { createSlice } from "@reduxjs/toolkit";

export const placesSlice = createSlice({
  name: "place",
  initialState: {
    list: [],
  },
  reducers: {
    addPlace: (state, action) => {
      state.list.push(action.payload);
    },

    removePlace: (state, action) => {
      const index = state.list.indexOf(action.payload);
      state.list.splice(index, 1);
    },
  },
});

export const { addPlace, removePlace } = placesSlice.actions;

export default placesSlice.reducer;
