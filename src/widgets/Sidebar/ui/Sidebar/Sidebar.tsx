import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const cls = classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
    className,
  ]);

  return (
    <div className={cls}>
      <button onClick={toggleCollapsed}>{t("toggle")}</button>

      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
