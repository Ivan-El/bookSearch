import { Book } from 'entities/Book';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import cls from './BookPage.module.css';

export const BookPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (!id) {
    return (
      <div className={cls.page}>
        <div className={cls.container}>
          <Text
            title={'Book not found'}
            align={TextAlign.CENTER}
            size={TextSize.L}
            theme={TextTheme.ERROR}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cls.page}>
      <div className={cls.btnWrapper}>
        <Button onClick={onBackButtonClick} variant={ButtonVariant.BACK}>
          Back to list
        </Button>
      </div>
      <div className={cls.container}>
        <Book id={id} />
      </div>
    </div>
  );
});
