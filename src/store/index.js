import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './uiSlice';
import paginatedListSlice from './paginatedListSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer, 
    paginatedList: paginatedListSlice.reducer, 
  },
})

export default store;