import { StateSchema } from "app/providers/StoreProvider";

import { getError } from "./getError";

describe("getError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      login: { error: "error" },
    };

    expect(getError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getError(state as StateSchema)).toEqual("");
  });
});
