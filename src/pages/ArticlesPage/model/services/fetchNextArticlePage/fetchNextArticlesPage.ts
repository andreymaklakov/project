import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";

import {
  getArticlesPageHasMore,
  getArticlesPagePage,
  getArticlesPageIsLoading,
} from "../../selectors/articlePageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../slice/articlesPageSlice";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  "articlePage/fetchNextArticlesPage",

  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPagePage(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (!hasMore || isLoading) return;

    dispatch(fetchArticlesList({ page: page + 1 }));
    dispatch(articlesPageActions.setPage(page + 1));
  }
);
