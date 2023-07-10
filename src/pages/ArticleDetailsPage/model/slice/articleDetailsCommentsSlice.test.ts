import { Comment } from "entitiess/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

const ids = ["1", "2"];
const entities = {
  "1": {
    id: "1",
    text: "First comment",
    user: {
      id: "1",
      username: "admin",
      avatar: "",
    },
  },
  "2": {
    id: "2",
    text: "Second comment",
    user: {
      id: "2",
      username: "andrejs",
      avatar: "",
    },
  },
};

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

describe("articleDetailsCommentsSlice.test", () => {
  test("test fetchCommentsByArticleId pending", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      error: "",
      isLoading: false,
    };

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending
      )
    ).toEqual({ error: undefined, isLoading: true });
  });

  test("test fetchCommentsByArticleId rejected", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      error: "error",
      isLoading: true,
    };

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.rejected
      )
    ).toEqual({ error: undefined, isLoading: false });
  });

  test("test fetchCommentsByArticleId fulfilled", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      ids: [],
      entities: {},
      isLoading: true,
    };

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(data, "", "1")
      )
    ).toEqual({ ids, entities, isLoading: false });
  });
});
