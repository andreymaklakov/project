import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

import { getLoginState } from "./getLoginState";

describe("getLoginState.test", () => {
  test("should return state", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: "password",
        username: "username",
        error: "error",
        isLoading: false,
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      password: "password",
      username: "username",
      error: "error",
      isLoading: false,
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
