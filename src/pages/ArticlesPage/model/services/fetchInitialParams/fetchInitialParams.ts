import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType } from "entitiess/Article";

import {
  getArticlesPageInited,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlePageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { SortOrder } from "shared/types";

interface FetchInitialParamsProps {
  searchParams: URLSearchParams;
}

export const fetchInitialParams = createAsyncThunk<
  void,
  FetchInitialParamsProps,
  ThunkConfig<string>
>(
  "articlePage/fetchInitialParams",

  async (props, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const { searchParams } = props;

    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    const inited = getArticlesPageInited(getState());

    if (inited) return;

    const newOrder = (searchParams.get("order") ?? order) as SortOrder;
    const newSort = (searchParams.get("sort") ?? sort) as ArticleSortField;
    const newSearch = searchParams.get("search") ?? search;
    const newType = (searchParams.get("type") ?? type) as ArticleType;

    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setSearch(newSearch));
    dispatch(articlesPageActions.setType(newType));

    dispatch(articlesPageActions.initState());
  }
);
