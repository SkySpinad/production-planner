import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  filterData: [],
};

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    allCompetitions: (state, action) => {
      state.data = action.payload
      state.filterData = state.data
    },
    searchByText: (state, action) => {
      state.filterData = state.data.filter((comp) => 
          comp.id.toUpperCase().includes(action.payload.toUpperCase()) ||
          comp.name.toUpperCase().includes(action.payload.toUpperCase()))
        return state
    }
  }
});

export const { allCompetitions, searchByText } = competitionsSlice.actions;
export default competitionsSlice.reducer;
