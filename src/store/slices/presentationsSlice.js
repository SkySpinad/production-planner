import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: ""
};
const presentationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    getPresentationsByFeedId: (state, action) => {
      state.data = action.payload
    },
    errorPresentation: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  }
});

export const { getPresentationsByFeedId, errorPresentation } = presentationsSlice.actions;

export default presentationsSlice.reducer;
