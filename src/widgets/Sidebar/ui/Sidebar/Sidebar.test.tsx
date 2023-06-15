import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("sidebar component", () => {
  test("sidebar component renders", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("sidebar toggle", async () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");

    await userEvent.click(toggleBtn);
    // fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    await userEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
