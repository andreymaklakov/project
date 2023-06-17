import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./AppLink.module.scss";

export enum AppLinkVariant {
  PRIMARY = "primary",
  INVERTED_PRIMARY = "invertedPrimary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  variant = AppLinkVariant.PRIMARY,
  ...otherProps
}) => {
  const cls = classNames(styles.AppLink, {}, [className, styles[variant]]);

  return (
    <Link to={to} className={cls} {...otherProps}>
      {children}
    </Link>
  );
};
