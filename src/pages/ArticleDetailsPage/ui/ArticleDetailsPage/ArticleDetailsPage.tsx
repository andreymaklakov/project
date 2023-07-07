import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const cls = classNames(styles.ArticleDetailsPage, {}, [className]);

  const { t } = useTranslation("article");

  return <div className={cls}>Article details page</div>;
};

export default memo(ArticleDetailsPage);
