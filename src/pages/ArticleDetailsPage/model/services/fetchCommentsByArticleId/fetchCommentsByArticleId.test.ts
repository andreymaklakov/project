import { Comment } from "entitiess/Comment";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

const data: Comment[] = [
  {
    id: "1",
    text: "First comment",
    user: {
      id: "1",
      username: "admin",
      avatar: "",
    },
  },
  {
    id: "2",
    text: "Second comment",
    user: {
      id: "2",
      username: "andrejs",
      avatar: "",
    },
  },
];

describe("fetchCommentsByArticleId.test", () => {
  test("should return user data", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
