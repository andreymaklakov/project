import { AddCommentFormSchema } from "../types/addCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";

describe("addCommentFormSlice.test", () => {
  test("test setText", () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: "",
    };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText("test")
      )
    ).toEqual({
      text: "test",
    });
  });
});
