import { memo } from "react";

import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";

import { Comment } from "../../model/types/types";

import styles from "./CommentItem.module.scss";

interface CommentItemProps {
  className?: string;
  comment?: Comment;
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

  if (!comment) return null;

  return (
    <div className={cls}>
      <AppLink
        to={`${RoutePaths.profile}${comment.user.id}`}
        className={styles.header}
      >
        <Avatar
          size={30}
          src={
            comment.user.avatar ||
            "https://www.eastendprep.org/wp-content/uploads/2016/06/noavatar.jpg"
          }
        />

        <Text title={comment.user.username} />
      </AppLink>

      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
