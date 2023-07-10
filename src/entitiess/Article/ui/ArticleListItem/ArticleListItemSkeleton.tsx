import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

import { ArticleView } from "../../model/types/article";

import styles from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton({
  className,
  view,
}: ArticleListItemSkeletonProps) {
  const cls = classNames(styles.ArticleListItem, {}, [className, styles[view]]);

  if (view === ArticleView.LIST) {
    return (
      <div className={cls}>
        <Card>
          <div className={styles.header}>
            <Skeleton width={30} height={30} borderRadius={"50%"} />

            <Skeleton height={20} width={100} />

            <Skeleton height={20} width={100} className={styles.date} />
          </div>

          <Skeleton height={28} width={400} className={styles.title} />

          <Skeleton height={20} width={100} className={styles.types} />

          <Skeleton height={300} width={"100%"} />

          <div className={styles.footer}>
            <Skeleton height={20} width={100} />

            <Skeleton height={20} width={100} className={styles.views} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cls}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton height={200} width={200} />
        </div>

        <div className={styles.infoWrapper}>
          <Skeleton height={20} width={100} className={styles.types} />

          <Skeleton height={20} width={100} className={styles.views} />
        </div>

        <Skeleton height={20} width={150} className={styles.title} />
      </Card>
    </div>
  );
});
