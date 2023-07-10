import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AddCommentForm from "./AddCommentForm";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
  args: {
    onSendComment: action("text"),
  },
};

Light.decorators = [
  StoreDecorator({
    addCommentForm: {
      text: "",
    },
  }),
];

export const Dark: Story = {
  args: {
    onSendComment: action("text"),
  },
};

Dark.decorators = [
  StoreDecorator({
    addCommentForm: {
      text: "",
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const Orange: Story = {
  args: {
    onSendComment: action("text"),
  },
};

Orange.decorators = [
  StoreDecorator({
    addCommentForm: {
      text: "",
    },
  }),
  ThemeDecorator(Theme.ORANGE),
];
