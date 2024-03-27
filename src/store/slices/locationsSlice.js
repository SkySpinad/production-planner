import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};
const locationsSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    allLocations: (state, action) => {
      state.data = action.payload
    },
    updateLocations: (state, action) => {
      const updatedArr = [...state.data]
        const obj = {
          country: action.payload.country,
          courtId: action.payload.courtId,
          courtName: action.payload.courtName,
          eventGroupId: action.payload.eventGroupId,
          feedId: action.payload.feedId,
          key: action.payload.key,
          presentation: JSON.stringify(action.payload.presentation)
        }
        const newList = []
        updatedArr.map(el=> {
          if(el.courtId == obj.courtId) {
            newList.push(obj)
          } else {
            newList.push(el)
          }
        })
        state.data = newList
    }
  }
});

export const { allLocations, updateLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
