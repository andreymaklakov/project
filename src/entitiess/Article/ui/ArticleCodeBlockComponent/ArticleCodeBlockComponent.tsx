import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code/Code";
import { Text } from "shared/ui/Text/Text";

import { ArticleCodeBlock } from "../../model/types/article";

import styles from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  function ArticleCodeBlockComponent({
    className,
    block,
  }: ArticleCodeBlockComponentProps) {
    const cls = classNames(styles.ArticleCodeBlockComponent, {}, [className]);

    return (
      <div className={cls}>
        {block.title ? (
          <Text title={block.title} className={styles.title} />
        ) : null}

        <Code content={block.code} />
      </div>
    );
  }
);
