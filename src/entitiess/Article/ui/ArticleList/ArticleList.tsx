import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import styles from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo(function ArticleList({
  className,
  articles,
  isLoading,
  view = ArticleView.LIST,
}: ArticleListProps) {
  const cls = classNames(styles.ArticleList, {}, [className, styles[view]]);

  const { t } = useTranslation();

  const renderArticle = useCallback(
    (article: Article) => {
      return <ArticleListItem key={article.id} article={article} view={view} />;
    },
    [view]
  );

  return (
    <div className={cls}>
      {articles.length ? articles.map(renderArticle) : null}

      {isLoading ? getSkeletons(view) : null}
    </div>
  );
});
