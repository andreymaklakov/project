/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text } from "../Text/Text";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
  args: {
    children: <Text title={"Title"} text={"Test card"} />,
  },
};

export const Dark: Story = {
  args: {
    children: <Text title={"Title"} text={"Test card"} />,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
  args: {
    children: <Text title={"Title"} text={"Test card"} />,
  },
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
