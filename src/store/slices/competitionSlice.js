import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { checkFieldIsempty } from '../../utils/utils';

const initialState = {
  data: [],
  filterData: [],
};

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    //initializeCompetition: (state, action) => {
    //  state.data = action.payload;
    //},
    filterByText: (state, action) => {
      if(action.payload.filterData) {
        state.data = state.filterData.filter((comp) => 
          comp.id.toUpperCase().includes(action.payload.filterData.toUpperCase()) ||
          comp.name.toUpperCase().includes(action.payload.filterData.toUpperCase()))
        return state
      } else {
        state.data = action.payload
        state.filterData = state.data
        return state
      }
    }
  }
});

export const { filterByText } = competitionsSlice.actions;
export default competitionsSlice.reducer;
