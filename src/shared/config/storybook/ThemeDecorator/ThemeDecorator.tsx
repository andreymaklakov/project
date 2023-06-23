import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export default function ThemeDecorator(theme: Theme) {
  return function fn(Story: PartialStoryFn<ReactRenderer>) {
    document.body.className = theme;

    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
}
