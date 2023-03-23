import { memo } from 'react';
import { SearchResult } from 'feauters/SearchResults';
import cls from './BookSearchPage.module.css';

export const BookSearchPage = memo(() => {
  return (
    <div className={cls.page}>
      <SearchResult />
    </div>
  );
});
