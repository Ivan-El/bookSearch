import { memo, useCallback, useMemo } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Select } from 'shared/ui/Select/Select';
import cls from './BookSearchForm.module.css';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import {
  getSearchFormSort,
  getSearchFormText,
  getSearchFormFilter,
} from '../../model/selectors/searchFormSelectors';
import { bookSearchFormActions } from '../../model/slices/searchFormSlice';
import {
  SearchFormFilterType,
  SearchFormSchema,
  SearchFormSortType,
} from '../../model/types/searchSchema';

export interface BookSearchFormProps {
  className?: string;
  onSendRequest: (data: SearchFormSchema) => void;
}

export const BookSearchForm = memo((props: BookSearchFormProps) => {
  const { className, onSendRequest } = props;
  const text = useSelector(getSearchFormText);
  const sort = useSelector(getSearchFormSort);
  const filter = useSelector(getSearchFormFilter);
  const dispatch = useAppDispatch();
  const formData: SearchFormSchema = useMemo(() => {
    return {
      query: text || '',
      filterType: filter || 'all',
      sortType: sort || 'relevance',
      startIndex: 0,
    };
  }, [filter, sort, text]);

  const sortOptions: SearchFormSortType[] = useMemo(() => {
    return ['relevance', 'newest'];
  }, []);

  const categoriesOptions: SearchFormFilterType[] = useMemo(() => {
    return [
      'all',
      'art',
      'biography',
      'computers',
      'history',
      'medical',
      'poetry',
    ];
  }, []);

  const onRequestTextChange = useCallback(
    (value: string) => {
      dispatch(bookSearchFormActions.setQuery(value));
    },
    [dispatch]
  );

  const onChangeFilterSelect = useCallback(
    (value: string) => {
      dispatch(bookSearchFormActions.setFilter(value as SearchFormFilterType));
    },
    [dispatch]
  );

  const onChangeSortSelect = useCallback(
    (value: string) => {
      dispatch(bookSearchFormActions.setSort(value as SearchFormSortType));
    },
    [dispatch]
  );

  const onSendRequestHandler = useCallback(() => {
    onSendRequest(formData);
  }, [formData, onSendRequest]);

  return (
    <form className={cx(cls.form, className)}>
      <div className={cls.heading}>Search for books</div>
      <div className={cls.searchWrapper}>
        <Input
          className={cls.input}
          value={text}
          onChange={onRequestTextChange}
        />
        <Button
          className={cls.searchBtn}
          variant={ButtonVariant.SEARCH}
          onClick={onSendRequestHandler}
        >
          <span className={cls.searchBtnText}>Search</span>
        </Button>
      </div>
      <div className={cls.selectWrapper}>
        <Select
          options={categoriesOptions}
          label="Categories"
          onChange={onChangeFilterSelect}
          className={cls.select}
        />
        <Select
          options={sortOptions}
          label="Sort by"
          onChange={onChangeSortSelect}
          className={cls.select}
        />
      </div>
    </form>
  );
});
