import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { SortOrder } from "shared/types";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entitiess/Article";

import styles from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (order: SortOrder) => void;
  onChangeSort: (sort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(function ArticleSortSelector({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) {
  const cls = classNames(styles.ArticleSortSelector, {}, [className]);

  const { t } = useTranslation("article");

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("ascending"),
      },
      {
        value: "desc",
        content: t("descending"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.TITLE,
        content: t("title"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("views"),
      },
      {
        value: ArticleSortField.CREATED,
        content: t("date"),
      },
    ],
    [t]
  );

  return (
    <div className={cls}>
      <Select
        label={t("Sort by")}
        options={sortFieldOptions}
        onChange={onChangeSort}
        value={sort}
      />

      <Select
        label={t("by")}
        options={orderOptions}
        onChange={onChangeOrder}
        value={order}
      />
    </div>
  );
});
