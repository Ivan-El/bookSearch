import cls from './Navbar.module.css';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { BookSearchForm, SearchFormSchema } from 'feauters/SearchForm';
import { fetchBookList } from 'feauters/SearchResults';

export const Navbar = memo(() => {
  const dispatch = useAppDispatch();

  const onSendRequest = useCallback(
    (data: SearchFormSchema) => {
      dispatch(fetchBookList(data));
    },
    [dispatch]
  );

  return (
    <div className={cls.navbar}>
      <div className={cls.container}>
        <BookSearchForm onSendRequest={onSendRequest} />
      </div>
    </div>
  );
});
