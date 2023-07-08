import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Comment } from "entitiess/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  "articleDetailsComments/fetchCommentsByArticleId",

  async (articleId, thunkAPI) => {
    if (!articleId) {
      return thunkAPI.rejectWithValue(i18n.t("error"));
    }

    try {
      const response = await thunkAPI.extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
          _expand: "user",
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(i18n.t("error"));
    }
  }
);
