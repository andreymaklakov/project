import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollProps) {
  useEffect(() => {
    if (!callback) return;

    const options = {
      root: wrapperRef.current,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [wrapperRef, triggerRef, callback]);
}
