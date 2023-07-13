import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticlePageFilters } from "./ArticlePageFilters";

const meta: Meta<typeof ArticlePageFilters> = {
  title: "pages/Article/ArticlePageFilters",
  component: ArticlePageFilters,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlePageFilters>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({
    articlesPage: {},
  }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({
    articlesPage: {},
  }),
  ThemeDecorator(Theme.DARK),
];

export const Orange: Story = {
  args: {},
};

Orange.decorators = [
  StoreDecorator({
    articlesPage: {},
  }),
  ThemeDecorator(Theme.ORANGE),
];
