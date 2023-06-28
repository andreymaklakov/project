import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

import { getPassword } from "./getPassword";

describe("getPassword.test", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      login: { password: "password" },
    };

    expect(getPassword(state as StateSchema)).toEqual("password");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getPassword(state as StateSchema)).toEqual("");
  });
});
