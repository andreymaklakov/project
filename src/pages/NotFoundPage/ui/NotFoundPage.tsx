import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(function NotFoundPage({
  className = "",
}: NotFoundPageProps) {
  const cls = classNames(styles.NotFoundPage, {}, [className]);

  const { t } = useTranslation();

  return <div className={cls}>{t("Page not found")}</div>;
});
