import { StateSchema } from "app/providers/StoreProvider";

import { getUsername } from "./getUsername";

describe("getUsername.test", () => {
  test("should return username", () => {
    const state: DeepPartial<StateSchema> = {
      login: { username: "username" },
    };

    expect(getUsername(state as StateSchema)).toEqual("username");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUsername(state as StateSchema)).toEqual("");
  });
});
