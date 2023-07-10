import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentItem } from "./CommentItem";
import { Comment } from "../../model/types/types";

const meta: Meta<typeof CommentItem> = {
  title: "entities/Comment/CommentItem",
  component: CommentItem,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

const comment: Comment = {
  id: "1",
  text: "some comment",
  user: {
    id: "1",
    username: "vasya",
    avatar: undefined,
  },
};

export const Light: Story = {
  args: {
    comment,
  },
};

export const Dark: Story = {
  args: { comment },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
  args: { comment },
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LoadingLight: Story = {
  args: {
    isLoading: true,
  },
};

export const LoadingDark: Story = {
  args: { isLoading: true },
};

LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingOrange: Story = {
  args: { isLoading: true },
};

LoadingOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
