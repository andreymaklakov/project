import { createSelector } from "@reduxjs/toolkit";

import { getLoginState } from "../getLoginState/getLoginState";

export const getError = createSelector(getLoginState, (login) => login.error);
