import { FC, lazy } from "react";

import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  //@ts-ignore
  () => new Promise((res) => setTimeout(() => res(import("./LoginForm")), 1000))
);
