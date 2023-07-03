import { ChangeEvent, FC, memo, useCallback, useMemo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(function Select({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps) {
  const cls = classNames(styles.Select, {}, [className]);

  const optionsList = useMemo(
    () =>
      options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.content}
        </option>
      )),
    [options]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={cls}>
      {label ? <span className={styles.label}>{label + ">"}</span> : null}

      <select disabled={readonly} value={value} onChange={handleChange}>
        {optionsList}
      </select>
    </div>
  );
});
