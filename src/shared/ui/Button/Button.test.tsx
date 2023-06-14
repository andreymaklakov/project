/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react";

import { Button, ThemeButton } from "./Button";

describe("button component", () => {
  test("button component renders", () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("button class adds", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);

    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});