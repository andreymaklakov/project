import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import {
  AppRouteProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

import { RequireAuth } from "./RequireAuth";

export const AppRouter = memo(function AppRouter() {
  const renderWithWrapper = useCallback(
    ({ element, path, authOnly }: AppRouteProps) => {
      const route = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

      return (
        <Route
          key={path}
          path={path}
          element={!authOnly ? route : <RequireAuth>{route}</RequireAuth>}
        />
      );
    },
    []
  );

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
