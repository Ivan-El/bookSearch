import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';
import cx from 'classnames';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SEARCH = 'search',
  MORE = 'more',
  BACK = 'back',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'primary',
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cx(cls.Button, className, cls[variant])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
