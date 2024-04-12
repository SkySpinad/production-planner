import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: ""
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
    errorDay: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
});

export const { allDays, errorDay } = daysSlice.actions;
export default daysSlice.reducer;
