export type SearchFormFilterType =
  | 'all'
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry';

export type SearchFormSortType = 'relevance' | 'newest';

export interface SearchFormSchema {
  query: string;
  filterType: SearchFormFilterType;
  sortType: SearchFormSortType;
  startIndex: number;
}
