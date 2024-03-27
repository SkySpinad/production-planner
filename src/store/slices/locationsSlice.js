import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};
const locationsSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    allLocations: (state, action) => {
      state.data = action.payload
    }
  }
});

export const { allLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
