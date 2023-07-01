import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entitiess/User";
import i18n from "shared/config/i18n/i18n";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  "login/loginByUsername",

  async (data, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>(`/login`, data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem("user", JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      thunkAPI.extra.navigate("/profile");

      return response.data;
    } catch (error) {
      console.log(error);
    }
    return thunkAPI.rejectWithValue(i18n.t("Login or password is incorrect"));
  }
);
