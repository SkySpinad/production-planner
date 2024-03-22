import { createSlice } from '@reduxjs/toolkit';
import locations_mock from '../../mock/productionPlanner/locations.json'

const initialState = { data: locations_mock.data };

const locationsSlice = createSlice({
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

export const { addCompetition, deleteCompetition } = locationsSlice.actions;

export default locationsSlice.reducer;
