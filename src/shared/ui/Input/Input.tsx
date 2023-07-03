import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo(function Input({
  className = "",
  value,
  onChange,
  type = "text",
  placeholder,
  autoFocus,
  readonly,
  ...other
}: InputProps) {
  const mods = {
    [styles.readonly]: readonly,
  };
  const cls = classNames(styles.InputWrapper, mods, [className]);

  const ref = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
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
        readOnly={readonly}
        {...other}
      />
    </div>
  );
});
