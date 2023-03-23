import cx from 'classnames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { fetchBookById } from '../../model/services/fetchBookById';
import { bookReducer } from '../../model/slices/bookSlice';
import cls from './Book.module.css';
import {
  getBookData,
  getBookError,
  getBookIsLoading,
} from '../../model/selectors/bookSelectors';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface BookProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  book: bookReducer,
};

export const Book = memo((props: BookProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getBookIsLoading);
  const book = useSelector(getBookData);
  const error = useSelector(getBookError);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div className={cx(cls.container, className)}>
        <Skeleton className={cls.skAvatar} />
        <div>
          <Skeleton className={cls.skBlock} />
          <Skeleton className={cls.skBlock} />
          <Skeleton className={cls.skBlock} />
          <Skeleton className={cls.skBlock} />
        </div>
      </div>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={'An error occurred while loading the book'}
      />
    );
  } else {
    content = (
      <div className={cx(cls.container, className)}>
        <img
          className={cls.img}
          src={book?.volumeInfo.imageLinks?.large}
          alt={book?.volumeInfo.title}
          width="318"
          height="404"
        />
        <div>
          <Text
            text={book?.volumeInfo.categories?.join(', ')}
            className={cls.categories}
          />
          <Text title={book?.volumeInfo.title} className={cls.title} />
          <Text
            text={book?.volumeInfo.authors?.join(', ')}
            className={cls.authors}
          />

          <Text text={book?.volumeInfo.description} className={cls.desc} />
        </div>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
});
