import cx from 'classnames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.css';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={cx(cls.Skeleton, className)} style={styles} />;
});
