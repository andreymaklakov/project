import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { ArticleList } from "entitiess/Article";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page/Page";
import { Text, TextVariant } from "shared/ui/Text/Text";

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlePage/fetchNextArticlesPage";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { ArticlePageFilters } from "../ArticlePageFilters/ArticlePageFilters";
import { fetchInitialParams } from "../../model/services/fetchInitialParams/fetchInitialParams";

import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const initialReducer: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const cls = classNames(styles.ArticlesPage, {}, [className]);

  const { t } = useTranslation("article");

  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);
  const limit = useSelector(getArticlesPageLimit);

  const [searchParams] = useSearchParams();

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchInitialParams({ searchParams }));
  });

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      if (articles.length <= 5) {
        dispatch(fetchArticlesList({}));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  if (error) {
    return (
      <Text
        title={t("Data fetch error, please try one more time")}
        variant={TextVariant.ERROR}
      />
    );
  }

  return (
    <DynamicModuleLoader reducer={initialReducer} removeAfterUnmount={false}>
      <Page
        onScrollEnd={!isLoading ? handleLoadNextPage : undefined}
        className={cls}
        saveScroll
      >
        <ArticlePageFilters />

        <ArticleList
          className={styles.list}
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
