import { FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.css';
import cx from 'classnames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <input
      className={cx(cls.Input, className)}
      type={type}
      value={value}
      onChange={onChangeHandler}
      readOnly={readonly}
      {...otherProps}
    />
  );
});
