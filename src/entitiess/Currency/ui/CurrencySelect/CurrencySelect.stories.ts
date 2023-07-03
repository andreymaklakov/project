import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { CurrencySelect } from "./CurrencySelect";
import { Currency } from "../../model/types/currency";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Light: Story = {
  args: {
    value: Currency.EUR,
  },
};

export const Dark: Story = {
  args: { value: Currency.EUR },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
