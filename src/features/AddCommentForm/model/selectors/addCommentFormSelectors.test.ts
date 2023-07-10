import { StateSchema } from "app/providers/StoreProvider";

import {
  getAddCommentFormText,
  getAddCommentFormError,
  getAddCommentFormIsLoading,
} from "./addCommentFormSelectors";

describe("getAddCommentFormText.test", () => {
  test("should return text", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: "comment",
      },
    };

    expect(getAddCommentFormText(state as StateSchema)).toEqual("comment");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAddCommentFormText(state as StateSchema)).toEqual("");
  });
});

describe("getAddCommentFormIsLoading.test", () => {
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        isLoading: true,
      },
    };

    expect(getAddCommentFormIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAddCommentFormIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe("getAddCommentFormError.test", () => {
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: "error",
      },
    };

    expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
