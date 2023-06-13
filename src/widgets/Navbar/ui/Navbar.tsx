import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const cls = classNames(styles.Navbar, {}, [className]);

  return (
    <div className={cls}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Main
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
