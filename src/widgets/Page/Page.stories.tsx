import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Page } from "./Page";

const meta: Meta<typeof Page> = {
  title: "widgets/Page",
  component: Page,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Page>;

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

export const Orange: Story = {
  args: {},
};

Orange.decorators = [
  StoreDecorator({
    scrollSave: {
      scroll: {},
    },
  }),
  ThemeDecorator(Theme.ORANGE),
];
