import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";

import { Comment } from "../../model/types/types";
import { CommentItem } from "../CommentItem/CommentItem";

import styles from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList({
  className,
  comments,
  isLoading,
}: CommentListProps) {
  const cls = classNames(styles.CommentList, {}, [className]);
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={cls}>
        <CommentItem className={styles.comment} isLoading />
        <CommentItem className={styles.comment} isLoading />
        <CommentItem className={styles.comment} isLoading />
      </div>
    );
  }

  return (
    <div className={cls}>
      {comments.length ? (
        comments.map((comment) => (
          <CommentItem
            className={styles.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t("No comments")} />
      )}
    </div>
  );
});
