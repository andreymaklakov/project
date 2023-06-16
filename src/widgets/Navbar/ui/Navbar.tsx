import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const cls = classNames(styles.Navbar, {}, [className]);

  const { t } = useTranslation();

  return (
    <div className={cls}>
      <div className={styles.links}>/</div>
    </div>
  );
};
