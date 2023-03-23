import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBookById } from '../services/fetchBookById';
import { IBook } from '../types/book';
import { BookSchema } from '../types/bookSchema';

const initialState: BookSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchBookById.fulfilled,
        (state, action: PayloadAction<IBook>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchBookById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: bookActions } = bookSlice;
export const { reducer: bookReducer } = bookSlice;
