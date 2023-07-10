import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import { getUserAuthData } from "entitiess/User";

import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  Item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem({
  Item,
  collapsed,
}: SidebarItemProps) {
  const cls = classNames(
    styles.SidebarItem,
    { [styles.collapsed]: collapsed },
    []
  );

  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && Item.authOnly) return null;

  return (
    <div className={cls}>
      <AppLink
        variant={AppLinkVariant.INVERTED_PRIMARY}
        to={Item.path}
        className={styles.item}
      >
        <Item.icon className={styles.icon} />

        <span className={styles.link}>{t(Item.text)}</span>
      </AppLink>
    </div>
  );
});
