import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Avatar } from "./Avatar";
import img from "./storybook.jpeg";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
  args: {
    src: img,
  },
};

export const Dark: Story = {
  args: {
    src: img,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const CustomSized: Story = {
  args: {
    src: img,
    size: 50,
  },
};

export const NoAvatar: Story = {
  args: {
    size: 200,
  },
};
