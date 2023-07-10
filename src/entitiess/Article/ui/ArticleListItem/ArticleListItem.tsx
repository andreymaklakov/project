import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";

import EyeIcon from "shared/assets/icons/eye.svg";

import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

import styles from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(function ArticleListItem({
  className,
  article,
  view,
}: ArticleListItemProps) {
  const cls = classNames(styles.ArticleListItem, {}, [className, styles[view]]);

  const { t } = useTranslation("article");

  const navigate = useNavigate();

  const handleOpenArticle = useCallback(() => {
    navigate(RoutePaths.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div className={cls}>
        <Card>
          <div className={styles.header}>
            <Avatar src={article.user.avatar} size={30} />

            <Text text={article.user.username} />

            <Text text={article.createdAt} className={styles.date} />
          </div>

          <Text title={article.title} className={styles.title} />

          <Text text={article.type.join(", ")} className={styles.types} />

          <img src={article.img} alt={article.title} />

          <ArticleTextBlockComponent
            block={textBlock}
            className={styles.textBlock}
          />

          <div className={styles.footer}>
            <Button variant={ButtonVariant.CLEAR} onClick={handleOpenArticle}>
              {t("Read more")}...
            </Button>

            <Text text={article.views.toString()} className={styles.views} />

            <EyeIcon />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cls}>
      <Card onClick={handleOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} alt={article.title} />

          <Text text={article.createdAt} className={styles.date} />
        </div>

        <div className={styles.infoWrapper}>
          <Text text={article.type.join(", ")} className={styles.types} />

          <Text text={article.views.toString()} className={styles.views} />

          <EyeIcon />
        </div>

        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
});
