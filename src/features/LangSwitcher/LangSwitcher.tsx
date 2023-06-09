import { useTranslation } from "react-i18next";
import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(function LangSwitcher({
  className = "",
  short,
}: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const cls = classNames("", {}, [className]);

  return (
    <Button
      className={cls}
      variant={ButtonVariant.CLEAR}
      onClick={toggleLanguage}
    >
      {t(short ? "Ln" : "Language")}
    </Button>
  );
});
