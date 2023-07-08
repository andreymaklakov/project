import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  args: {
    height: 100,
    width: 300,
  },
};

export const Dark: Story = {
  args: { height: 100, width: 300 },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
  args: { height: 100, width: 300 },
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const CircleLight: Story = {
  args: {
    height: 100,
    width: 100,
    borderRadius: "50%",
  },
};
