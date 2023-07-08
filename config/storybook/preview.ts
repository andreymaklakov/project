import type { Preview } from "@storybook/react";

import { Theme } from "./../../src/app/providers/ThemeProvider";
import ThemeDecorator from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { TranslationDecorator } from "./../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";

import "app/styles/index.scss";
import { withRouter } from "storybook-addon-react-router-v6";

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
    withRouter,
    (Story) => TranslationDecorator(Story),
  ],
};

export default preview;
