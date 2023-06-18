import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";

import { Counter } from "./Counter";

describe("Counter", () => {
  test("should render value", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    const value = screen.getByTestId("counter-value-title");

    expect(value).toHaveTextContent("10");
  });

  test("should increment on btn click", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    const value = screen.getByTestId("counter-value-title");
    const incrementBtn = screen.getByTestId("counter-increment-btn");

    await userEvent.click(incrementBtn);

    expect(value).toHaveTextContent("11");
  });

  test("should decrement on btn click", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const value = screen.getByTestId("counter-value-title");
    const decrementBtn = screen.getByTestId("counter-decrement-btn");

    await userEvent.click(decrementBtn);

    expect(value).toHaveTextContent("9");
  });
});
