import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { downloadCsv } from '../../utils/utils';

const initialState = {
  data: [],
  filterData: [],
  isLoading: true
};

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    allCompetitions: (state, action) => {
      state.data = action.payload
      state.filterData = state.data
      state.isLoading = false
    },
    searchByText: (state, action) => {
      state.filterData = state.data.filter((comp) => 
          comp.eventGroupId.toUpperCase().includes(action.payload.toUpperCase()) ||
          comp.competitionName.toUpperCase().includes(action.payload.toUpperCase()))
        return state
    },
    downloadFile: (state, action) => {
      downloadCsv(state.filterData, action.payload)
    }
  }
});

export const { allCompetitions, searchByText, downloadFile } = competitionsSlice.actions;
export default competitionsSlice.reducer;
