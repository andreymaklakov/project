import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const cls = classNames(styles.ArticlesPage, {}, [className]);

  const { t } = useTranslation("article");

  return <div className={cls}>Articles page</div>;
};

export default memo(ArticlesPage);
