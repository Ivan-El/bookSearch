import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getSearchFormData } from 'feauters/SearchForm';
import { searchFormActions } from 'feauters/SearchForm/model/slices/searchFormSlice';
import {
  getBookHasMore,
  getBookListIsLoading,
} from '../selectors/bookListSelectors';
import { fetchBookList } from './fetchBookList';

export const fetchBookListNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('bookList/fetchListNextPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getBookHasMore(getState());
  const isLoading = getBookListIsLoading(getState());
  const data = getSearchFormData(getState());
  const startIndex = data.startIndex;

  if (hasMore && !isLoading) {
    dispatch(searchFormActions.setStartIndex(startIndex + 1));
    dispatch(fetchBookList({ ...data, startIndex: startIndex + 1 }));
  }
});
