import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "features/AddCommentForm/model/slice/addCommentFormSlice";

import {
  getAddCommentFormError,
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";

import styles from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducer: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(function AddCommentForm({
  className,
  onSendComment,
}: AddCommentFormProps) {
  const cls = classNames(styles.AddCommentForm, {}, [className]);

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const isLoading = useSelector(getAddCommentFormIsLoading);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleChangeCommentForm = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const handleSendComment = useCallback(() => {
    handleChangeCommentForm("");

    onSendComment(text);
  }, [text, onSendComment, handleChangeCommentForm]);

  return (
    <DynamicModuleLoader reducer={initialReducer}>
      <div className={cls}>
        <Input
          className={styles.input}
          value={text}
          onChange={handleChangeCommentForm}
          placeholder={t("Enter your comment")}
        />

        <Button disabled={isLoading} onClick={handleSendComment}>
          {t("Send")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
