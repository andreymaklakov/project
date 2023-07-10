import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentList } from "./CommentList";
import { Comment } from "../../model/types/types";

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

const comments: Comment[] = [
  {
    id: "1",
    text: "some comment",
    user: {
      id: "1",
      username: "vasya",
      avatar: undefined,
    },
  },
  {
    id: "2",
    text: "some other comment",
    user: {
      id: "2",
      username: "dima",
      avatar: undefined,
    },
  },
];

export const Light: Story = {
  args: { comments },
};

export const Dark: Story = {
  args: { comments },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
  args: { comments },
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LoadingLight: Story = {
  args: { isLoading: true },
};

export const NoCommentsLight: Story = {
  args: { comments: [] },
};
