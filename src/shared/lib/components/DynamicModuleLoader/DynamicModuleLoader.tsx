import { FC, useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

import {
  ReduxStoreWithManager,
  StateSchema,
} from "app/providers/StoreProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducer: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducer,
  removeAfterUnmount,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducer).forEach(([name, reducer]) => {
      store.reducerManager.add(name as keyof StateSchema, reducer);

      dispatch({ type: `@INIT ${name} async reducer` });
    });

    return () => {
      if (!removeAfterUnmount) return;

      Object.entries(reducer).forEach(([name]) => {
        store.reducerManager.remove(name as keyof StateSchema);
        dispatch({ type: `@REMOVE ${name} async reducer` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
