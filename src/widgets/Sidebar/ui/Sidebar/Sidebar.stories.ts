import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/SideBar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({
    user: {
      authData: {
        username: "test",
      },
    },
  }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        username: "test",
      },
    },
  }),
];

export const NoAuthLight: Story = {
  args: {},
};

NoAuthLight.decorators = [
  StoreDecorator({
    user: {},
  }),
];
