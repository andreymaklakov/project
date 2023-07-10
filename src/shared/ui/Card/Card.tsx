import { FC, HTMLAttributes } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: FC<CardProps> = ({ className, children, ...otherProps }) => {
  const cls = classNames(styles.Card, {}, [className]);

  return (
    <div className={cls} {...otherProps}>
      {children}
    </div>
  );
};
