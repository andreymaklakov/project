import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";

import { ArticleImageBlock } from "../../model/types/article";

import styles from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  function ArticleImageBlockComponent({
    className,
    block,
  }: ArticleImageBlockComponentProps) {
    const cls = classNames(styles.ArticleImageBlockComponent, {}, [className]);

    return (
      <div className={cls}>
        <img
          src={block.src}
          className={styles.image}
          alt={block.title || "image"}
        />

        {block.title ? (
          <Text text={block.title} align={TextAlign.CENTER} />
        ) : null}
      </div>
    );
  }
);
