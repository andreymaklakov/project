import type { Preview } from "@storybook/react";

import { Theme } from "./../../src/app/providers/ThemeProvider";
import ThemeDecorator from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { TranslationDecorator } from "./../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";

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
    (Story) => TranslationDecorator(Story),
  ],
};

export default preview;
