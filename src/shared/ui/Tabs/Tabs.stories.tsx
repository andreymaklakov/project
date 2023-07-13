import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "shared/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  {
    value: "tab1",
    content: "tab1",
  },
  {
    value: "tab2",
    content: "tab2",
  },
  {
    value: "tab3",
    content: "tab3",
  },
];

export const Light: Story = {
  args: {
    tabs,
    value: "tab2",
    onTabClick: action("onTabClick"),
  },
};

export const Dark: Story = {
  args: { tabs, value: "tab2", onTabClick: action("onTabClick") },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
  args: { tabs, value: "tab2", onTabClick: action("onTabClick") },
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
