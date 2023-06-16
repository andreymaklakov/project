import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";

import { Sidebar } from "./Sidebar";

describe("sidebar component", () => {
  test("sidebar component renders", () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("sidebar toggle", async () => {
    componentRender(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");

    await userEvent.click(toggleBtn);
    // fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    await userEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
