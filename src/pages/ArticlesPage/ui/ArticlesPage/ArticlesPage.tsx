import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from "entitiess/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "shared/ui/Page/Page";
import { Text, TextVariant } from "shared/ui/Text/Text";

import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPagePage,
  getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlePage/fetchNextArticlesPage";

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

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
  });

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      if (articles.length <= 5) {
        dispatch(fetchArticlesList({ page: 1 }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const handleViewClick = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesPageActions.setView(newView));
    },
    [dispatch]
  );

  if (error) {
    return (
      <Text
        title={t("Data fetch error, please try one more time")}
        variant={TextVariant.ERROR}
      />
    );
  }

  return (
    <DynamicModuleLoader reducer={initialReducer}>
      <Page onScrollEnd={handleLoadNextPage} className={cls}>
        <ArticleViewSelector view={view} onViewClick={handleViewClick} />

        <ArticleList isLoading={isLoading} articles={articles} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
