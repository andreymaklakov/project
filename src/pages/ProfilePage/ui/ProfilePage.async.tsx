import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    //@ts-ignore
    new Promise((res) => setTimeout(() => res(import("./ProfilePage")), 1000))
);
