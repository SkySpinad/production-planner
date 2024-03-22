import { createSlice } from '@reduxjs/toolkit';
import competitions_mock from '../../mock/productionPlanner/competitions.json'

const initialState = { data: competitions_mock.data };

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    addCompetition(state, action) {
      state.competitions.push(action.payload);
    },
    deleteCompetition(state, action) {
      state.competitions = state.competitions.filter((competition) => competition.id !== action.payload.id);
    },
  },
});

export const { addCompetition, deleteCompetition } = competitionsSlice.actions;

export default competitionsSlice.reducer;
