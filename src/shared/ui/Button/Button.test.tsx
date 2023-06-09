import { render, screen } from "@testing-library/react";

import { Button, ButtonVariant } from "./Button";

describe("button component", () => {
  test("button component renders", () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("button class adds", () => {
    render(<Button variant={ButtonVariant.CLEAR}>TEST</Button>);

    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
