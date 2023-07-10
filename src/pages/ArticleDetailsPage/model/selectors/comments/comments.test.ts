import { StateSchema } from "app/providers/StoreProvider";

import {
  getArticleCommentsIsLoading,
  getArticleCommentsError,
} from "./comments";

describe("commentsSelectors.test", () => {
  test("should return loading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };

    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe("getArticleCommentsError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: "true",
      },
    };

    expect(getArticleCommentsError(state as StateSchema)).toEqual("true");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
