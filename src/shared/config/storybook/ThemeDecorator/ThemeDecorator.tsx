import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { Theme } from "app/providers/ThemeProvider";

export default function ThemeDecorator(theme: Theme) {
  return function fn(Story: PartialStoryFn<ReactRenderer>) {
    document.body.className = theme;

    return (
      <div className={`app`}>
        <Story />
      </div>
    );
  };
}
