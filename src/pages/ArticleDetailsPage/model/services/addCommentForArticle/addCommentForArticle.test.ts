import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { addCommentForArticle } from "./addCommentForArticle";

const data = {
  userId: "1",
  text: "text",
  articleId: "1",
};
const authData = {
  id: "1",
  username: "username",
};

describe("addCommentForArticle.test", () => {
  test("should return user data", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData,
      },
      articleDetails: {
        data: {
          id: "1",
        },
      },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("text");

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData,
      },
      articleDetails: {
        data: {
          id: "1",
        },
      },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("text");

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
