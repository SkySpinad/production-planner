import { createSlice } from '@reduxjs/toolkit';
import days_mock from '../../mock/productionPlanner/days.json'

const initialState = { data: days_mock.data };

const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    addCompetition(state, action) {
      state.competitions.push(action.payload);
    },
    deleteCompetition(state, action) {
      state.competitions = state.competitions.filter((day) => day.id !== action.payload.id);
    },
  },
});

export const { addCompetition, deleteCompetition } = daysSlice.actions;

export default daysSlice.reducer;
