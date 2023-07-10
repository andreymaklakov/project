import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";

import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
>(
  "profile/fetchProfileData",

  async (userId, thunkAPI) => {
    if (!userId) {
      return thunkAPI.rejectWithValue(i18n.t("error"));
    }

    try {
      const response = await thunkAPI.extra.api.get<Profile>(
        `/profile/${userId}`
      );

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
