import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { CountrySelect } from "./CountrySelect";
import { Countries } from "../../model/types/countries";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Light: Story = {
  args: {
    value: Countries.Latvia,
  },
};

export const Dark: Story = {
  args: { value: Countries.Latvia },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
