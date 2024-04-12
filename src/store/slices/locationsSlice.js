import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: ""
};
const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    allLocations: (state, action) => {
      state.data = action.payload
    },
    errorLocation: (state, action) => {
      state.error = action.payload
      state.isLoading = false
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

export const { allLocations, updateLocations, errorLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
