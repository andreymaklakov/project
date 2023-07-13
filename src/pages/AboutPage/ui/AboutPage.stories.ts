import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({
    scrollSave: {
      scroll: {},
    },
  }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({
    scrollSave: {
      scroll: {},
    },
  }),
  ThemeDecorator(Theme.DARK),
];
