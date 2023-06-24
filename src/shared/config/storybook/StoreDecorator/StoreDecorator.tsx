import { DeepPartial } from "@reduxjs/toolkit";
import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export default function StoreDecorator(state: DeepPartial<StateSchema>) {
  return function fn(Story: PartialStoryFn<ReactRenderer>) {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
}
