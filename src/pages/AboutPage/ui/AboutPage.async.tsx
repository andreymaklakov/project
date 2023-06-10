import { lazy } from "react";

export const AboutPageAsync = lazy(
  //@ts-ignore
  () => new Promise((res) => setTimeout(() => res(import("./AboutPage")), 1000))
);
