import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export function ThemeDecorator(theme: Theme) {
  return function (Story: PartialStoryFn<ReactRenderer>) {
    return (
      <div className={`app ${theme}`}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    );
  };
}
