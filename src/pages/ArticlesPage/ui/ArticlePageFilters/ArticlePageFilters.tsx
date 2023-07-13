import { memo, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from "entitiess/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { ArticleType } from "entitiess/Article";

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";

import styles from "./ArticlePageFilters.module.scss";

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo(function ArticlePageFilters({
  className,
}: ArticlePageFiltersProps) {
  const cls = classNames(styles.ArticlePageFilters, {}, [className]);

  const { t } = useTranslation("article");

  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 300);

  const handleViewClick = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesPageActions.setView(newView));
    },
    [dispatch]
  );

  const handleChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const handleChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const handleChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));

      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const handleTabClick = useCallback(
    (tab: TabItem<ArticleType>) => {
      dispatch(articlesPageActions.setType(tab.value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={cls}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />

        <ArticleViewSelector view={view} onViewClick={handleViewClick} />
      </div>

      <Card>
        <Input
          placeholder={t("Search")}
          value={search}
          onChange={handleChangeSearch}
        />
      </Card>

      <ArticleTypeTabs onTabClick={handleTabClick} type={type} />
    </div>
  );
});
