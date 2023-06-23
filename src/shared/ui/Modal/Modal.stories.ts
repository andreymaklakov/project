import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni distinctio mollitia ea error corrupti optio, aut soluta sunt ex?",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni distinctio mollitia ea error corrupti optio, aut soluta sunt ex?",
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
