import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
};

export default function StoreDecorator(
  state: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>
) {
  return function fn(Story: PartialStoryFn<ReactRenderer>) {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
}
