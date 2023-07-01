import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className = "" }) => {
  const cls = classNames(styles.PageError, {}, [className]);

  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={cls}>
      <p>{t("An error has occurred")}</p>
      <Button onClick={reloadPage}>{t("Reload page")}</Button>
    </div>
  );
};
