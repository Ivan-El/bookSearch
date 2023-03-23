import cx from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.css';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cx(cls.ErrorPage, className)}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};
