import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextVariant } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const PrimaryLight: Story = {
  args: {
    text: "text",
    title: "title",
  },
};

export const PrimaryDark: Story = {
  args: {
    text: "text",
    title: "title",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOnlyTitle: Story = {
  args: {
    title: "title",
  },
};

export const PrimaryOnlyText: Story = {
  args: {
    text: "text",
  },
};

export const ErrorLight: Story = {
  args: {
    text: "text",
    title: "title",
    variant: TextVariant.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    text: "text",
    title: "title",
    variant: TextVariant.ERROR,
  },
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
