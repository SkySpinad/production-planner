import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    initializeDays: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { initializeDays } = daysSlice.actions;
export default daysSlice.reducer;
