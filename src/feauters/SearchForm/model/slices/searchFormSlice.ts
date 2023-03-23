import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SearchFormSchema,
  SearchFormSortType,
  SearchFormFilterType,
} from '../types/searchSchema';

export const initialState: SearchFormSchema = {
  filterType: 'all',
  query: '',
  sortType: 'relevance',
  startIndex: 0,
};

export const searchFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSort: (state, action: PayloadAction<SearchFormSortType>) => {
      state.sortType = action.payload;
    },
    setFilter: (state, action: PayloadAction<SearchFormFilterType>) => {
      state.filterType = action.payload;
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
  },
});

export const { actions: searchFormActions } = searchFormSlice;
export const { reducer: searchFormReducer } = searchFormSlice;
