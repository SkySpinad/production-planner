import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    initializeCompetition: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { initializeCompetition } = competitionsSlice.actions;
export default competitionsSlice.reducer;
