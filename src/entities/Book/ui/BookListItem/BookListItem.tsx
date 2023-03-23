import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../model/types/book';
import cx from 'classnames';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import cls from './BookListItem.module.css';

interface BookListItemProps {
  className?: string;
  book: IBook;
}

export const BookListItem = memo(({ className, book }: BookListItemProps) => {
  const { volumeInfo } = book;
  const navigate = useNavigate();

  const onOpenBook = useCallback(() => {
    navigate(RoutePath.book_page + book.id);
  }, [book.id, navigate]);

  return (
    <Card className={cx(className)}>
      <img
        src={volumeInfo.imageLinks?.smallThumbnail}
        alt={volumeInfo.title}
        className={cls.img}
        width="128"
        height="191"
      />
      {volumeInfo.categories?.length ? (
        <Text text={volumeInfo.categories?.[0]} className={cls.categories} />
      ) : (
        <div className={cls.categoriesBlank} />
      )}

      <Text title={volumeInfo.title} className={cls.ttl} />
      <Text text={volumeInfo.authors?.join(', ')} />

      <div>
        <Button
          className={cls.btn}
          onClick={onOpenBook}
          variant={ButtonVariant.MORE}
        >
          Read more...
        </Button>
      </div>
    </Card>
  );
});
