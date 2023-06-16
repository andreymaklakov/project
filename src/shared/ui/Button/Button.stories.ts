import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Button",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
  },
};

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const BackgroundInvertedDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SqareSizeM: Story = {
  args: {
    children: "X",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SqareSizeL: Story = {
  args: {
    children: "X",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SqareSizeXL: Story = {
  args: {
    children: "X",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
