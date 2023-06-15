import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story: PartialStoryFn<ReactRenderer>) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
