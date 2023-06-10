import { lazy } from "react";

export const MainPageAsync = lazy(
  //@ts-ignore
  () => new Promise((res) => setTimeout(() => res(import("./MainPage")), 1000))
);
