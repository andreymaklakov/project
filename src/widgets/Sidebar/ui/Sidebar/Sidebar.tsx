import { memo, useState } from "react";
import { useSelector } from "react-redux";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ButtonVariant } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar({ className = "" }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = useSelector(getSidebarItems);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const cls = classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
    className,
  ]);

  return (
    <menu data-testid="sidebar" className={cls}>
      <Button
        data-testid="sidebar-toggle"
        className={styles.collapseBtn}
        onClick={toggleCollapsed}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={styles.items}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} Item={item} collapsed={collapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </menu>
  );
});
