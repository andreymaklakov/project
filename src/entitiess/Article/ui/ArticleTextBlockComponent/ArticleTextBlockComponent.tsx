import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";

import { ArticleTextBlock } from "../../model/types/article";

import styles from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  function ArticleTextBlockComponent({
    className,
    block,
  }: ArticleTextBlockComponentProps) {
    const cls = classNames(styles.ArticleTextBlockComponent, {}, [className]);

    return (
      <div className={cls}>
        {block.title ? (
          <Text title={block.title} className={styles.title} />
        ) : null}

        {block.paragraphs.map((paragraph, id) => (
          <Text
            key={"paragraph" + id}
            text={paragraph}
            className={styles.paragraph}
          />
        ))}
      </div>
    );
  }
);
