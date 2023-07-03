import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

const options = [
  { value: "1", content: "uno" },
  { value: "2", content: "dos" },
];

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
  args: {
    options: options,
    value: "1",
  },
};

export const Dark: Story = {
  args: { options: options, value: "1" },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabelLight: Story = {
  args: {
    label: "Label",
    options: options,
    value: "1",
  },
};

export const WithLabelDark: Story = {
  args: {
    label: "Label",
    options: options,
    value: "1",
  },
};

WithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
