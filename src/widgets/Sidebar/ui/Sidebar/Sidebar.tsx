import { memo, useState } from "react";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ButtonVariant } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItemList } from "widgets/Sidebar/model/items";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const cls = classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
    className,
  ]);

  return (
    <div data-testid="sidebar" className={cls}>
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
        {SidebarItemList.map((item) => (
          <SidebarItem key={item.path} Item={item} collapsed={collapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
});
