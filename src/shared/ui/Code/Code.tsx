import { memo, useCallback } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import CopyIcon from "shared/assets/icons/copy.svg";

import { Button, ButtonVariant } from "../Button/Button";

import styles from "./Code.module.scss";

interface CodeProps {
  className?: string;
  content: string;
}

export const Code = memo(function Code({ className, content }: CodeProps) {
  const cls = classNames(styles.Code, {}, [className]);

  const handleClick = useCallback(
    () => navigator.clipboard.writeText(content),
    [content]
  );

  return (
    <pre className={cls}>
      <Button
        onClick={handleClick}
        className={styles.copyBtn}
        variant={ButtonVariant.CLEAR}
      >
        <CopyIcon />
      </Button>

      <code>{content}</code>
    </pre>
  );
});
