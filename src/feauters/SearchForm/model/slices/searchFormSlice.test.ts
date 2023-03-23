import { SearchFormSchema } from '../types/searchSchema';
import { searchFormActions, searchFormReducer } from './searchFormSlice';

describe('searchFormSlice test', () => {
  test('should set query', () => {
    const state: DeepPartial<SearchFormSchema> = { query: 'vue' };
    expect(
      searchFormReducer(
        state as SearchFormSchema,
        searchFormActions.setQuery('react js')
      )
    ).toEqual({ query: 'react js' });
  });

  test('should set password', () => {
    const state: DeepPartial<SearchFormSchema> = { filterType: 'all' };
    expect(
      searchFormReducer(
        state as SearchFormSchema,
        searchFormActions.setFilter('computers')
      )
    ).toEqual({ filterType: 'computers' });
  });
});
