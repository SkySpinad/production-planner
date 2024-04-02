import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    allDays: (state, action) => {
      state.data = action.payload
      state.filterData = state.data
      state.isLoading = false
    },
  }
});

export const { allDays } = daysSlice.actions;
export default daysSlice.reducer;
