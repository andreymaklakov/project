import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";

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
