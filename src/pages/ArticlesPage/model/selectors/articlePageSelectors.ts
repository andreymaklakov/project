import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entitiess/Article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.LIST;

export const getArticlesPagePage = (state: StateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 5;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;
