import { configureStore } from '@reduxjs/toolkit';
import competitionsSlice from './slices/competitionSlice';
import daysSlice from './slices/daysSlice';
import locationsSlice from './slices/locationsSlice';

const store = configureStore({
  reducer: { 
    competitions: competitionsSlice, 
    days: daysSlice,
    locations: locationsSlice 
  },
});

export default store;
