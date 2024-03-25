import { createSlice } from '@reduxjs/toolkit';
import days_mock from '../../mock/productionPlanner/days.json'

const initialState = { data: days_mock.data };

const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    
  },
});

export const { addCompetition, deleteCompetition } = daysSlice.actions;

export default daysSlice.reducer;
