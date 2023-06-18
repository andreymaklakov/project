import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "entitiess/Counter";

import { StateSchema } from "./StateSchema";

const rootReducer = combineReducers<StateSchema>({
  counter: counterReducer,
});

export function createReduxStore(initialState?: StateSchema) {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

// export const store = createReduxStore();

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
