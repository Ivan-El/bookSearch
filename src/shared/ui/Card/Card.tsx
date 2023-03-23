import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.css';
import cx from 'classnames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={cx(cls.Card, className)} {...otherProps}>
      {children}
    </div>
  );
});
