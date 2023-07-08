import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextSize, TextVariant } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const MSizeLight: Story = {
  args: {
    text: "text",
    title: "title",
  },
};

export const MSizeDark: Story = {
  args: {
    text: "text",
    title: "title",
  },
};

MSizeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MSizeOrange: Story = {
  args: {
    text: "text",
    title: "title",
  },
};

MSizeOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const MSizeOnlyTitle: Story = {
  args: {
    title: "title",
  },
};

export const MSizeOnlyText: Story = {
  args: {
    text: "text",
  },
};

export const MSizeErrorLight: Story = {
  args: {
    text: "text",
    title: "title",
    variant: TextVariant.ERROR,
  },
};

export const MSizeErrorDark: Story = {
  args: {
    text: "text",
    title: "title",
    variant: TextVariant.ERROR,
  },
};

MSizeErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MSizeErrorOrange: Story = {
  args: {
    text: "text",
    title: "title",
    variant: TextVariant.ERROR,
  },
};

MSizeErrorOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LSizeLight: Story = {
  args: {
    text: "text",
    title: "title",
    size: TextSize.L,
  },
};
