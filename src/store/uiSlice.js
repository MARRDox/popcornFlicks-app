import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    searchComponentIsOpen: false
  },
  reducers: {
    toogleSearchComponent: (state) => {
      state.searchComponentIsOpen = !state.searchComponentIsOpen;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;