import { ButtonHTMLAttributes, memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ButtonVariant {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
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
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo(function Button({
  className,
  children,
  variant,
  square,
  disabled = false,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) {
  const mods: Record<string, boolean> = {
    [styles.sqaure]: square,
  };
  const additional = [className, styles[variant], styles[size]];

  const cls = classNames(styles.Button, mods, additional);

  return (
    <button disabled={disabled} className={cls} {...otherProps}>
      {children}
    </button>
  );
});
