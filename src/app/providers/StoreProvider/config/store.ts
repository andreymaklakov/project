import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "entitiess/User";
import { loginReducer } from "features/AuthByUsername";

import { StateSchema } from "./StateSchema";

const rootReducer = combineReducers<StateSchema>({
  user: userReducer,
  login: loginReducer,
});

export function createReduxStore(initialState?: StateSchema) {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
