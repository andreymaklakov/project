import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Text.module.scss";

export enum TextVariant {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  variant = TextVariant.PRIMARY,
}) => {
  const mods = {};
  const cls = classNames(styles.Text, mods, [className, styles[variant]]);

  return (
    <div className={cls}>
      {title ? <p className={styles.title}>{title}</p> : null}
      {text ? <p className={styles.text}>{text}</p> : null}
    </div>
  );
};
