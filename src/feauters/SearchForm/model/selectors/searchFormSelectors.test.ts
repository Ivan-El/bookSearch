import { StateSchema } from 'app/providers/StoreProvider';
import {
  getSearchFormData,
  getSearchFormFilter,
  getSearchFormSort,
  getSearchFormText,
} from './searchFormSelectors';
import { initialState } from './../slices/searchFormSlice';

describe('searchFormSelectors test', () => {
  test('getSearchFormData should should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSearchFormData(state as StateSchema)).toEqual(initialState);
  });
  test('getSearchFormFilter should return poetry', () => {
    const state: DeepPartial<StateSchema> = {
      form: {
        filterType: 'poetry',
      },
    };
    expect(getSearchFormFilter(state as StateSchema)).toBe('poetry');
  });
  test('getSearchFormFilter should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSearchFormFilter(state as StateSchema)).toBe('all');
  });

  test('getSearchFormSort should return newest', () => {
    const state: DeepPartial<StateSchema> = {
      form: {
        sortType: 'newest',
      },
    };
    expect(getSearchFormSort(state as StateSchema)).toBe('newest');
  });
  test('getSearchFormSort should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSearchFormSort(state as StateSchema)).toBe('relevance');
  });

  test('getSearchFormText should return example', () => {
    const state: DeepPartial<StateSchema> = {
      form: {
        query: 'example',
      },
    };
    expect(getSearchFormText(state as StateSchema)).toBe('example');
  });
  test('getSearchFormText should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSearchFormText(state as StateSchema)).toBe('');
  });
});
