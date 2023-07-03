import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Text.module.scss";

export enum TextVariant {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
}

export const Text = memo(function Text({
  className = "",
  text,
  title,
  variant = TextVariant.PRIMARY,
  align = TextAlign.LEFT,
}: TextProps) {
  const cls = classNames(styles.Text, {}, [
    className,
    styles[variant],
    styles[align],
  ]);

  return (
    <div className={cls}>
      {title ? <p className={styles.title}>{title}</p> : null}
      {text ? <p className={styles.text}>{text}</p> : null}
    </div>
  );
});
