import { createSlice } from "@reduxjs/toolkit";


export const postSubmissionSlice = createSlice({
  name: "submission",
  initialState: {
    value: 'idle'
  },
  reducers: {
    isLoading: (state) => {
        state.value= 'loading'
    },

    isSuccessful: (state) => {
        state.value= 'success'
    },
    errorOcurred: (state) => {
        state.value= 'error'
    },
    resetSubmission : (state) => {
      return { value : 'idle'}
    },
  },
});

export const { isLoading, isSuccessful, errorOcurred, resetSubmission } = postSubmissionSlice.actions;

export default postSubmissionSlice.reducer;
