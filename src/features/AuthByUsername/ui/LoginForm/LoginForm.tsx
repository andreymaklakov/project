import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextVariant } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { getPassword } from "../../model/selectors/getPassword/getPassword";
import { getUsername } from "../../model/selectors/getUsername/getUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getError } from "../../model/selectors/getError/gerError";
import { getIsLoading } from "../../model/selectors/getIsLoading/getIsLoading";

import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onClose: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className, onClose }) => {
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch<AppDispatch>();

  const cls = classNames(styles.LoginForm, {}, [className]);

  const { t } = useTranslation();

  const handleChangeUsername = useCallback(
    (val: string) => {
      dispatch(loginActions.setUserName(val));
    },
    [dispatch]
  );

  const handleChangePasswod = useCallback(
    (val: string) => {
      dispatch(loginActions.setPassword(val));
    },
    [dispatch]
  );

  const handleLogin = useCallback(async () => {
    const data = await dispatch(loginByUsername({ username, password }));

    if (data.meta.requestStatus === "fulfilled") {
      onClose();
    }
  }, [dispatch, username, password, onClose]);

  return (
    <DynamicModuleLoader removeAfterAnmount reducer={initialReducers}>
      <div className={cls}>
        <Text title={t("Authorization form")} />

        {error ? <Text text={error} variant={TextVariant.ERROR} /> : null}

        <Input
          value={username}
          onChange={handleChangeUsername}
          placeholder={t("Enter username")}
          type="text"
          autoFocus
        />
        <Input
          onChange={handleChangePasswod}
          value={password}
          placeholder={t("Enter password")}
          type="password"
        />

        <Button
          onClick={handleLogin}
          disabled={isLoading}
          variant={ButtonVariant.OUTLINE}
          className={styles.btn}
        >
          {t("Log In")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
