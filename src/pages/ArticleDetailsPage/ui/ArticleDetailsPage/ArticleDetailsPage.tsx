import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { ArticleDetails } from "entitiess/Article";

import styles from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const cls = classNames(styles.ArticleDetailsPage, {}, [className]);

  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation("article");

  if (!id) {
    return <div className={cls}>{t("Article not found")}</div>;
  }
  return (
    <div className={cls}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
