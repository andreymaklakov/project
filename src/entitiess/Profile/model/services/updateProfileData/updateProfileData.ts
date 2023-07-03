import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";

import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  "profile/updateProfileData",

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const data = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>(`/profile`, data);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t("error"));
    }
  }
);
