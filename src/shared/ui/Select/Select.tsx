import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.css';
import cx from 'classnames';

interface SelectProps {
  className?: string;
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, onChange, value } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt} key={opt}>
          {opt}
        </option>
      )),
    [options]
  );

  return (
    <div className={cx(cls.Wrapper, className)}>
      {label && <span className={cls.label}>{label}</span>}
      <select className={cls.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
