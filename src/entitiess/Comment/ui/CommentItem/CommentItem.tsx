import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";

import { Comment } from "../../model/types/types";

import styles from "./CommentItem.module.scss";

interface CommentItemProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentItem = memo(function CommentItem({
  className,
  comment,
  isLoading,
}: CommentItemProps) {
  const cls = classNames(styles.CommentItem, {}, [className]);

  if (isLoading) {
    return (
      <div className={cls}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} borderRadius={"50%"} />

          <Skeleton width={100} height={20} />
        </div>

        <Skeleton className={styles.text} width={"100%"} height={40} />
      </div>
    );
  }

  return (
    <div className={cls}>
      <div className={styles.header}>
        <Avatar
          size={30}
          src={
            comment.user.avatar ||
            "https://www.eastendprep.org/wp-content/uploads/2016/06/noavatar.jpg"
          }
        />

        <Text title={comment.user.username} />
      </div>

      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
