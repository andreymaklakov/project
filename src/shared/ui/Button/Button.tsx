import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...otherProps
}) => {
  const cls = classNames(styles.Button, {}, [className, styles[theme]]);

  return (
    <button className={cls} {...otherProps}>
      {children}
    </button>
  );
};
