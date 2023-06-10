import { useTranslation } from "react-i18next";

import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const cls = classNames(styles.LangSwitcher, {}, [className]);

  return (
    <Button className={cls} theme={ThemeButton.CLEAR} onClick={toggleLanguage}>
      {t("Язык")}
    </Button>
  );
};
