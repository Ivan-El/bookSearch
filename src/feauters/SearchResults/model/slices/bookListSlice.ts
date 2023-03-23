import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IBook, IBookList } from 'entities/Book';
import { fetchBookList } from '../services/fetchBookList';
import { BookListSchema } from '../types/bookListSchema';

const booksAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.id,
});

export const getBooks = booksAdapter.getSelectors<StateSchema>(
  (state) => state.bookList || booksAdapter.getInitialState()
);

const booksListSlice = createSlice({
  name: 'bookList',
  initialState: booksAdapter.getInitialState<BookListSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    hasMore: true,
    page: 0,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchBookList.fulfilled,
        (state, action: PayloadAction<IBookList>) => {
          state.isLoading = false;
          state.totalItemsCount = action.payload.totalItems;
          state.hasMore = action.payload.items.length > 0;
          booksAdapter.addMany(state, action.payload?.items);
        }
      )
      .addCase(fetchBookList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: booksListReducer } = booksListSlice;
export const { actions: booksListActions } = booksListSlice;
