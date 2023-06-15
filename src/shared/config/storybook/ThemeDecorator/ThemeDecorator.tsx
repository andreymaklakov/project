import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator =
  (theme: Theme) => (Story: PartialStoryFn<ReactRenderer>) => {
    return (
      <div className={`app ${theme}`}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    );
  };
