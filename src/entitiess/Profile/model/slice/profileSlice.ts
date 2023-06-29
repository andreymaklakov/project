import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setData: (state) => {
      state.data = state.data;
    },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
