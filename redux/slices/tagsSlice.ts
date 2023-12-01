import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tagsSlice = createSlice({
  name: "tags",
  initialState: [
    {
      tagId: uuidv4(),
      tagName: null,
    },
  ],
  reducers: {
    addNewBox: (state) => {
      state.push({
        tagId: uuidv4(),
        tagName: null,
      });
    },
    removeBox: (state, action) =>
      state.filter((tag) => tag.tagId !== action.payload),
    addTag: (state, action) => {
      const boxToUpdate = state.find(
        (object) => object.tagId === action.payload.tagId,
      );
      if (boxToUpdate) {
        boxToUpdate.tagName = action.payload.selectedInterest;
      }
    },
  },
});

export const { addNewBox, addTag, removeBox } = tagsSlice.actions;

export default tagsSlice.reducer;
