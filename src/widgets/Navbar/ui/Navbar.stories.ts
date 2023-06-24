import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LightLoggedIn: Story = {
  args: {},
};

LightLoggedIn.decorators = [
  StoreDecorator({
    user: {
      authData: {
        username: "test",
      },
    },
  }),
];

export const DarkLoggedIn: Story = {
  args: {},
};

DarkLoggedIn.decorators = [
  StoreDecorator({
    user: {
      authData: {
        username: "test",
      },
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const LightLoggedOut: Story = {
  args: {},
};

LightLoggedOut.decorators = [
  StoreDecorator({
    user: {},
  }),
];

export const DarkLoggedOut: Story = {
  args: {},
};

DarkLoggedOut.decorators = [
  StoreDecorator({
    user: {},
  }),
  ThemeDecorator(Theme.DARK),
];
