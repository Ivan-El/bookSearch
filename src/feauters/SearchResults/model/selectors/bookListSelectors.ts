import { StateSchema } from 'app/providers/StoreProvider';

export const getBookListTotalCount = (state: StateSchema) =>
  state.bookList.totalItemsCount;
export const getBookListIsLoading = (state: StateSchema) =>
  state.bookList.isLoading;
export const getBookListError = (state: StateSchema) => state.bookList.error;
export const getBookHasMore = (state: StateSchema) => state.bookList.hasMore;
export const getBookPage = (state: StateSchema) => state.bookList.page;
