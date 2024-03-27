import { createSlice } from '@reduxjs/toolkit';
import days_mock from '../../mock/productionPlanner/days.json'

const initialState = {
  data: days_mock
};

const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
  }
});

export default daysSlice.reducer;
