import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const [value, setValue] = useState({ username: "", password: "" });

  const cls = classNames(styles.LoginForm, {}, [className]);

  const { t } = useTranslation();

  const handleChangeUsername = (val: string) => {
    setValue((prevState) => ({ ...prevState, username: val }));
  };

  const handleChangePasswod = (val: string) => {
    setValue((prevState) => ({ ...prevState, password: val }));
  };

  return (
    <div className={cls}>
      <Input
        value={value.username}
        onChange={handleChangeUsername}
        placeholder={t("Enter username")}
        type="text"
        autoFocus
      />
      <Input
        onChange={handleChangePasswod}
        value={value.password}
        placeholder={t("Enter password")}
        type="password"
      />

      <Button className={styles.btn}>{t("Log In")}</Button>
    </div>
  );
};
