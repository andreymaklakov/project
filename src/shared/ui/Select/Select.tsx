import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FC,
  memo,
  useCallback,
  useMemo,
} from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const typedMemo: <Component extends FC<any>>(
  component: Component,
  compare?: (
    prevProps: ComponentPropsWithoutRef<Component>,
    newProps: ComponentPropsWithoutRef<Component>
  ) => boolean
) => Component = memo;

export const Select = typedMemo(
  <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  }: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
  }
);
