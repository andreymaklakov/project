import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entitiess/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
// @ts-ignore
const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  test("should return user data", async () => {
    const userValue = { username: "username", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: "username",
      password: "password",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("should return error", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: "username",
      password: "password",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("Login or password is incorrect");
  });
});
