import { createSlice } from '@reduxjs/toolkit';
import locations_mock from '../../mock/productionPlanner/locations.json'

const initialState = { data: locations_mock.data };

const locationsSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
   
  },
});

export const { addCompetition, deleteCompetition } = locationsSlice.actions;

export default locationsSlice.reducer;
