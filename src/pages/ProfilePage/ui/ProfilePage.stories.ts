import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
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
  }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
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
  }),
];
