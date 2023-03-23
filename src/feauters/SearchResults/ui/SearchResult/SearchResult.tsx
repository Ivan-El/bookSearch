import { BookList } from 'entities/Book';
import { getBooks, fetchBookListNextPage } from 'feauters/SearchResults';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './SearchResult.module.css';
import {
  getBookListTotalCount,
  getBookListIsLoading,
} from '../../model/selectors/bookListSelectors';
import { Text, TextAlign, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';

export const SearchResult = memo(() => {
  const dispatch = useAppDispatch();
  const bookList = useSelector(getBooks.selectAll);
  const totalCount = useSelector(getBookListTotalCount);
  const isLoading = useSelector(getBookListIsLoading);

  const onLoadMoreHandler = useCallback(() => {
    dispatch(fetchBookListNextPage());
  }, [dispatch]);

  if (bookList.length) {
    return (
      <div className={cls.container}>
        <Text
          className={cls.count}
          align={TextAlign.CENTER}
          size={TextSize.L}
          weight={TextWeight.BOLD}
          text={`Found ${totalCount} results`}
        />
        <BookList books={bookList} isLoading={isLoading} />

        <Button
          onClick={onLoadMoreHandler}
          className={cls.btn}
          variant={ButtonVariant.MORE}
        >
          Load more
        </Button>
      </div>
    );
  }

  return (
    <div className={cls.container}>
      <div className={cls.message}>Enter a new search query</div>
    </div>
  );
});
