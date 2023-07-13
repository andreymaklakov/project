import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";

import { ArticleType } from "../../model/types/article";

import styles from "./ArticleTypeTabs.module.scss";

interface ArticleTypeTabsProps {
  className?: string;
  onTabClick: (tab: TabItem<ArticleType>) => void;
  type: ArticleType;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs({
  className,
  onTabClick,
  type,
}: ArticleTypeTabsProps) {
  const cls = classNames(styles.ArticleTypeTabs, {}, [className]);

  const { t } = useTranslation("article");

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("All"),
      },
      {
        value: ArticleType.IT,
        content: "IT",
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Science"),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t("Economics"),
      },
    ],
    [t]
  );

  return (
    <div className={cls}>
      <Tabs tabs={typeTabs} value={type} onTabClick={onTabClick} />
    </div>
  );
});
