import { FC, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher/LangSwitcher";

import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";

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
    <div data-testid="sidebar" className={cls}>
      <Button
        data-testid="sidebar-toggle"
        className={styles.collapseBtn}
        onClick={toggleCollapsed}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={styles.items}>
        <AppLink
          theme={AppLinkTheme.INVERTED_PRIMARY}
          to={RoutePaths.main}
          className={styles.item}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t("Main")}</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.INVERTED_PRIMARY}
          to={RoutePaths.about}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t("About")}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
