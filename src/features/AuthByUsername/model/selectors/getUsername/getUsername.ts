import { createSelector } from "@reduxjs/toolkit";

import { getLoginState } from "../getLoginState/getLoginState";

export const getUsername = createSelector(
  getLoginState,
  (login) => login?.username || ""
);
