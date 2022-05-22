import { createSlice } from "@reduxjs/toolkit";

import API from '../services/API';

const paginatedListSlice = createSlice({
  name: 'paginatedList',
  initialState: {
    loading: false,
    error: null,
    results: []
  },
  reducers: {
    onLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    onSuccess: (state, action) => {
      state.loading = false;
      state.results = [...action.payload];
    },
    onError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const { 
  onLoading, 
  onSuccess, 
  onError
} = paginatedListSlice.actions;

export const fetchMovies = (queryTerm = '') => async (dispatch) => {
  dispatch(onLoading());

  try {
    
    const response = await API.get(`/search/multi?query=${queryTerm}&page=1&include_adult=true`);
    
    if (response.status !== 200) {
      throw new Error('Something went wrong...');
    }

    const { results, total_results } = response.data;
    
    if (total_results < 1) {
      throw new Error('Theres no data about your query...');
    }

    dispatch(onSuccess(results));
    
  } catch (error) {
    dispatch(onError(error.message));
  }
};

export default paginatedListSlice;