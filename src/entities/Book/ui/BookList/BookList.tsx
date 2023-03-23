import { memo } from 'react';
import cls from './BookList.module.css';
import { IBook } from '../../model/types/book';
import cx from 'classnames';
import { BookListItem } from './../BookListItem/BookListItem';
import { CardSkeleton } from 'shared/ui/Card/CardSkeleton';

interface BookListProps {
  className?: string;
  books: IBook[];
  isLoading?: boolean;
}

export const BookList = memo((props: BookListProps) => {
  const { className, books, isLoading } = props;

  const renderBook = (book: IBook) => (
    <BookListItem book={book} className={cls.card} key={book.id} />
  );

  const getSkeletons = () =>
    new Array(4).fill(0).map((_, index) => <CardSkeleton key={index} />);

  return (
    <div className={cx(cls.list, className)}>
      {books.length > 0 ? books.map(renderBook) : null}
      {isLoading && getSkeletons()}
    </div>
  );
});
