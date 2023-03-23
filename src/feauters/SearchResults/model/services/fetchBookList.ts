import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IBookList } from 'entities/Book';
import { SearchFormSchema } from '../../../SearchForm/model/types/searchSchema';

const PAGINATION_COUNT: number = 30;

export const fetchBookList = createAsyncThunk<
  IBookList,
  SearchFormSchema,
  ThunkConfig<string>
>(
  'bookList/fetchList',
  async ({ query, filterType, sortType, startIndex }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const PAGINATION_PAGE: number =
        startIndex === 0 ? 0 : startIndex * PAGINATION_COUNT;

      const response = await extra.api.get<IBookList>(
        `?q=${query}+subject=${filterType}&startIndex=${PAGINATION_PAGE}&orderBy=${sortType}&maxResults=${PAGINATION_COUNT}&fields=totalItems,items(id,volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/categories,volumeInfo/imageLinks)&key=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
