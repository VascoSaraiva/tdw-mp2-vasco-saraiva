import { createSlice } from "@reduxjs/toolkit";
import { list } from "postcss";
import { v4 as uuidv4 } from "uuid";

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    list: [
      {
        tagId: uuidv4(),
        tagName: null,
      },
    ],
  },
  reducers: {
    addNewBox: (state) => {
      state.list.push({
        tagId: uuidv4(),
        tagName: null,
      });
    },
    removeBox: (state, action) => {
      let updatedList = state.list.filter((tag) => tag.tagId !== action.payload)
      return {
        list: updatedList
      }
    },
    addTag: (state, action) => {
      const boxToUpdate = state.list.find(
        (object) => object.tagId === action.payload.tagId,
      )
      if (boxToUpdate) {
        boxToUpdate.tagName = action.payload.selectedInterest;
      }
    },
    resetTags: (state) => {
      state.list = [
        {
          tagId: uuidv4(),
          tagName: null,
        },
      ]
    }
  },
});

export const { addNewBox, addTag, removeBox, resetTags } = tagsSlice.actions;

export default tagsSlice.reducer;
