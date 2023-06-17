import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkVariant } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  args: { to: "/" },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
  args: {
    children: "Link",
    variant: AppLinkVariant.PRIMARY,
  },
};

export const InvertedPrimaryLight: Story = {
  args: {
    children: "Link",
    variant: AppLinkVariant.INVERTED_PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Link",
    variant: AppLinkVariant.PRIMARY,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedPrimaryDark: Story = {
  args: {
    children: "Link",
    variant: AppLinkVariant.INVERTED_PRIMARY,
  },
};

InvertedPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
