import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXL",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.sqaure]: square,
  };
  const additional = [className, styles[theme], styles[size]];

  const cls = classNames(styles.Button, mods, additional);

  return (
    <button className={cls} {...otherProps}>
      {children}
    </button>
  );
};
