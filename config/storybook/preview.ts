import type { Preview } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

import "app/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) => RouterDecorator(Story),
  ],
};

export default preview;
