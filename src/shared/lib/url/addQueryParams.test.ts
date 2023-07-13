import { getQueryParams } from "./addQueryParams";

describe("addQueryParams.test", () => {
  test("test with one param", () => {
    const params = getQueryParams({
      test: "test",
    });

    expect(params).toEqual("?test=test");
  });

  test("test multiple params", () => {
    const params = getQueryParams({
      test: "test",
      search: "check",
    });

    expect(params).toEqual("?test=test&search=check");
  });

  test("test with undefined", () => {
    const params = getQueryParams({
      test: undefined,
      search: "check",
    });

    expect(params).toEqual("?search=check");
  });

  test("test with initial query params", () => {
    jest.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      search: "?abc=1&second=4",
    });

    const params = getQueryParams({
      test: undefined,
      second: "2",
    });

    expect(params).toBe("?abc=1&second=2");
  });
});
