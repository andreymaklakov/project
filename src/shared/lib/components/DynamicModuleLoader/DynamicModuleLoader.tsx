import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

import {
  ReduxStoreWithManager,
  StateSchema,
} from "app/providers/StoreProvider";
import { AppDispatch } from "app/providers/StoreProvider/config/store";

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer;
};

type ReducersListEntry = [keyof StateSchema, Reducer];

interface DynamicModuleLoaderProps {
  reducer: ReducersList;
  removeAfterAnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducer,
  removeAfterAnmount,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducer).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);

      dispatch({ type: `@INIT ${name} async reducer` });
    });

    return () => {
      if (!removeAfterAnmount) return;

      Object.entries(reducer).forEach(([name]: ReducersListEntry) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@REMOVE ${name} async reducer` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
