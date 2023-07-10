import { FC, lazy } from "react";

import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  //@ts-ignore
  () =>
    new Promise((res) =>
      setTimeout(() => res(import("./AddCommentForm")), 1000)
    )
);
