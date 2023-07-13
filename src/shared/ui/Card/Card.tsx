import { FC, HTMLAttributes } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Card.module.scss";

export enum CardVariant {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: CardVariant;
}

export const Card: FC<CardProps> = ({
  className,
  children,
  variant = CardVariant.NORMAL,
  ...otherProps
}) => {
  const cls = classNames(styles.Card, {}, [className, styles[variant]]);

  return (
    <div className={cls} {...otherProps}>
      {children}
    </div>
  );
};
