import { FC, useState } from "react";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const cls = classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
    className,
  ]);

  return (
    <div className={cls}>
      <button onClick={toggleCollapsed}>toggle</button>

      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
