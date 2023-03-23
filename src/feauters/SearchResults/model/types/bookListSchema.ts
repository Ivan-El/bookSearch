import { EntityState } from '@reduxjs/toolkit';
import { IBook } from 'entities/Book';

export interface BookListSchema extends EntityState<IBook> {
  totalItemsCount?: number;
  isLoading?: boolean;
  error?: string;
  // pagination
  page: number;
  hasMore: boolean;
}
