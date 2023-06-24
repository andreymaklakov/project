import { createSelector } from "@reduxjs/toolkit";

import { getLoginState } from "../getLoginState/getLoginState";

export const getIsLoading = createSelector(
  getLoginState,
  (login) => login.isLoading
);
