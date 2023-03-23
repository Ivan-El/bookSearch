import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchBookListNextPage } from './fetchBookListNextPage';
import { fetchBookList } from './fetchBookList';

jest.mock('./fetchBookList');

describe('fetchBookListNextPage test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchBookListNextPage, {
      bookList: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
  });
  test('fetchBookList not called', async () => {
    const thunk = new TestAsyncThunk(fetchBookListNextPage, {
      bookList: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchBookList).not.toHaveBeenCalled();
  });
});
