import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entitiess/Article/model/slice/articleDetailsSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice";
import { addCommentFormReducer } from "features/AddCommentForm/model/slice/addCommentFormSlice";
import { profileReducer } from "entitiess/Profile";

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
};

export default function StoreDecorator(
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) {
  return function fn(Story: PartialStoryFn<ReactRenderer>) {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
}
