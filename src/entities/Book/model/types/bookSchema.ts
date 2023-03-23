import { IBook } from 'entities/Book';

export interface BookSchema {
  isLoading: boolean;
  error?: string;
  data?: IBook;
}
