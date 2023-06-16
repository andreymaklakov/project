import { useTranslation } from "react-i18next";
import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const cls = classNames("", {}, [className]);

  return (
    <Button className={cls} theme={ButtonTheme.CLEAR} onClick={toggleLanguage}>
      {t(short ? "Ln" : "Language")}
    </Button>
  );
};
