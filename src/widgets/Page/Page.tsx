import { FC, MutableRefObject, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getSavedScrollByPath, scrollSaveActions } from "features/ScrollSave";

import styles from "./Page.module.scss";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
  saveScroll?: boolean;
}

export const Page: FC<PageProps> = ({
  className,
  children,
  onScrollEnd,
  saveScroll = false,
}) => {
  const cls = classNames(styles.Page, {}, [className]);

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getSavedScrollByPath(state, pathname)
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (!saveScroll) return;

    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <section ref={wrapperRef} className={cls} onScroll={handleScroll}>
      {children}

      {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
    </section>
  );
};
