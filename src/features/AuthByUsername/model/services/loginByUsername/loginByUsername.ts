import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User, userActions } from "entitiess/User";
import i18n from "shared/config/i18n/i18n";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>(
  "login/loginByUsername",

  async (data, thunkAPI) => {
    try {
      const response = await axios.post<User>(
        `http://localhost:3333/login`,
        data
      );

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem("user", JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
    }
    return thunkAPI.rejectWithValue(i18n.t("Login or password is incorrect"));
  }
);
