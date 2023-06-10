import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    const cls = classNames("test");
    expect(cls).toBe("test");
  });
  test("with additional class", () => {
    const cls = classNames("test", {}, ["foo", "bar"]);
    expect(cls).toBe("test foo bar");
  });
  test("with mods", () => {
    const cls = classNames("test", { hovered: true, active: false }, [
      "foo",
      "bar",
    ]);
    expect(cls).toBe("test foo bar hovered");
  });
  test("with mods undefined", () => {
    const cls = classNames("test", { hovered: true, active: undefined }, [
      "foo",
      "bar",
    ]);
    expect(cls).toBe("test foo bar hovered");
  });
});
