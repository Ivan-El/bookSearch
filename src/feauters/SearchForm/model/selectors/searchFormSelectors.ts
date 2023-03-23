import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from './../slices/searchFormSlice';


export const getSearchFormData = (state: StateSchema) => state.form || initialState;
export const getSearchFormText = (state: StateSchema) => state.form?.query || '';
export const getSearchFormSort = (state: StateSchema) => state.form?.sortType || 'relevance';
export const getSearchFormFilter = (state: StateSchema) =>
  state.form?.filterType || 'all';
