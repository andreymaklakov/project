import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

import { fetchNextArticlesPage } from "./fetchNextArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
  test("should sucsess", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        hasMore: true,
        entities: {},
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  test("should fetchArticlesList not to be called because of hasMore", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        hasMore: false,
        entities: {},
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).not.toHaveBeenCalled();
  });

  test("should fetchArticlesList not to be called because of isLoading", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        hasMore: true,
        entities: {},
        limit: 5,
        isLoading: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).not.toHaveBeenCalled();
  });
});
