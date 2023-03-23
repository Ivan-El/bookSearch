import { memo } from 'react';
import cls from './Text.module.css';
import cx from 'classnames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

export enum TextWeight {
  PRIMARY = 'weight_normal',
  BOLD = 'weight_bold',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    weight = TextWeight.PRIMARY,
  } = props;

  return (
    <div
      className={cx(cls.Text, cls[theme], cls[align], cls[size], cls[weight])}
    >
      {title && <p className={cx(cls.title, className)}>{title}</p>}
      {text && <p className={cx(cls.text, className)}>{text}</p>}
    </div>
  );
});
