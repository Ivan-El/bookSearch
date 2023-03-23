import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IBook } from '../../model/types/book';

export const fetchBookById = createAsyncThunk<
  IBook,
  string,
  ThunkConfig<string>
>('book/fetchBookById', async (bookId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<IBook>(
      `${bookId}?key=${process.env.REACT_APP_API_KEY}`
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
