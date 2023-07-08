import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { [FTName] } from "./[FTName]";


const meta: Meta<typeof [FTName]> = {
  title: "shared/[FTName]",
  component: [FTName],
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
  args: {
  },
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];