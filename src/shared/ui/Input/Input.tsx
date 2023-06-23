import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo(function Input({
  className,
  value,
  onChange,
  type = "text",
  placeholder,
  autoFocus,
  ...other
}: InputProps) {
  const cls = classNames(styles.InputWrapper, {}, [className]);

  const ref = useRef<HTMLInputElement>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={cls}>
      {placeholder ? (
        <div className={styles.placeholder}>
          {placeholder}
          {">"}
        </div>
      ) : null}

      <input
        ref={ref}
        type={type}
        value={value}
        onChange={handleChange}
        {...other}
      />
    </div>
  );
});
