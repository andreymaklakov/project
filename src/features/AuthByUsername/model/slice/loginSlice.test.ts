import { DeepPartial } from "@reduxjs/toolkit";

import { LoginSchema } from "../types/loginschema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "username",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUserName("user"))
    ).toEqual({ username: "user" });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "password",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("pass"))
    ).toEqual({ password: "pass" });
  });

  test("test set isLoading", () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };

    expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual(
      { isLoading: true }
    );
  });

  test("test set error", () => {
    const state: DeepPartial<LoginSchema> = {
      error: "",
    };

    expect(
      loginReducer(state as LoginSchema, loginByUsername.rejected)
    ).toEqual({ error: undefined, isLoading: false });
  });
});
