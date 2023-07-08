import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import EyeIcon from "shared/assets/icons/eye.svg";
import DateIcon from "shared/assets/icons/date.svg";

import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "entitiess/Article/model/services/fetchArticleById/fetchArticleById";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

import styles from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(function ArticleDetails({
  className,
  id,
}: ArticleDetailsProps) {
  const cls = classNames(styles.ArticleDetails, {}, [className]);
  const { t } = useTranslation("article");

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={styles.block}
            block={block}
          />
        );

      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={styles.block}
            block={block}
          />
        );

      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={styles.block}
            block={block}
          />
        );

      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Skeleton width={200} height={200} borderRadius={"50%"} />
        </div>

        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={"90%"} height={24} />
        <Skeleton className={styles.skeleton} width={"100%"} height={200} />
        <Skeleton className={styles.skeleton} width={"100%"} height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t("Error occurred during loading article")}
      />
    );
  } else if (article) {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article.img} />
        </div>

        <Text
          className={styles.title}
          title={article.title}
          text={article.subtitle}
          size={TextSize.L}
        />

        <div className={styles.articleInfo}>
          <EyeIcon />
          <Text text={article.views.toString()} />
        </div>

        <div className={styles.articleInfo}>
          <DateIcon />
          <Text text={article.createdAt} />
        </div>

        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducer={initialReducers} removeAfterUnmount={true}>
      <div className={cls}>{content}</div>
    </DynamicModuleLoader>
  );
});
