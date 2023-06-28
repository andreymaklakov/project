import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({ login: { username: "test", password: "test" } }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({ login: { username: "test", password: "test" } }),
  ThemeDecorator(Theme.DARK),
];

export const LightWithError: Story = {
  args: {},
};

LightWithError.decorators = [
  StoreDecorator({
    login: {
      username: "test",
      password: "test",
      error: "Username or password is incorrect",
    },
  }),
];

export const DarkWithError: Story = {
  args: {},
};

DarkWithError.decorators = [
  StoreDecorator({
    login: {
      username: "test",
      password: "test",
      error: "Username or password is incorrect",
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const LightIsLoading: Story = {
  args: {},
};

LightIsLoading.decorators = [
  StoreDecorator({
    login: {
      username: "test",
      password: "test",
      isLoading: true,
    },
  }),
];
