import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const EmptyLight: Story = {
  args: {},
};

export const EmptyDark: Story = {
  args: {},
};

EmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadonlyEmptyLight: Story = {
  args: { readonly: true },
};

export const ReadonlyEmptyDark: Story = {
  args: { readonly: true },
};

ReadonlyEmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithDataLight: Story = {
  args: {
    data: {
      first: "Andrejs",
      lastname: "Maklakovs",
      age: 28,
      currency: Currency.EUR,
      country: Countries.Latvia,
      city: "Liepāja",
      username: "admin",
      avatar:
        "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
    },
  },
};

export const WithDataDark: Story = {
  args: {
    data: {
      first: "Andrejs",
      lastname: "Maklakovs",
      age: 28,
      currency: Currency.EUR,
      country: Countries.Latvia,
      city: "Liepāja",
      username: "admin",
      avatar:
        "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
    },
  },
};

WithDataDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadonlyWithDataLight: Story = {
  args: {
    data: {
      first: "Andrejs",
      lastname: "Maklakovs",
      age: 28,
      currency: Currency.EUR,
      country: Countries.Latvia,
      city: "Liepāja",
      username: "admin",
      avatar:
        "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
    },
    readonly: true,
  },
};

export const ReadonlyWithDataDark: Story = {
  args: {
    data: {
      first: "Andrejs",
      lastname: "Maklakovs",
      age: 28,
      currency: Currency.EUR,
      country: Countries.Latvia,
      city: "Liepāja",
      username: "admin",
      avatar:
        "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
    },
    readonly: true,
  },
};

ReadonlyWithDataDark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoadingLight: Story = {
  args: {
    isLoading: true,
  },
};

export const IsLoadingDark: Story = {
  args: {
    isLoading: true,
  },
};

IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight: Story = {
  args: {
    error: "Error",
  },
};

export const ErrorDark: Story = {
  args: {
    error: "Error",
  },
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
