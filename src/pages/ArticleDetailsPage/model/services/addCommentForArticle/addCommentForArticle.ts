import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entitiess/Article";
import { Comment } from "entitiess/Comment";
import { getUserAuthData } from "entitiess/User";
import i18n from "shared/config/i18n/i18n";

import { fetchCommentsByArticleId } from "../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  "articleDetailsPage/addCommentForArticle",

  async (text, thunkAPI) => {
    const { getState, rejectWithValue, extra, dispatch } = thunkAPI;

    const userId = getUserAuthData(getState())?.id;
    const articleId = getArticleDetailsData(getState())?.id;

    if (!text || !userId || !articleId)
      return rejectWithValue(i18n.t("no data"));

    const data = {
      userId,
      text,
      articleId,
    };

    try {
      const response = await extra.api.post<Comment>(`/comments`, data);

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t("error"));
    }
  }
);
