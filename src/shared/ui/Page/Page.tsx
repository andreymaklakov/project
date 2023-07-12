import { FC, MutableRefObject, useRef } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

import styles from "./Page.module.scss";

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const cls = classNames(styles.Page, {}, [className]);

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={cls}>
      {children}

      <div ref={triggerRef} />
    </section>
  );
};
