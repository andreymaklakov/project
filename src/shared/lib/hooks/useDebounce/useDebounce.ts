import { useCallback, useEffect, useRef } from "react";

export function useDebounce(cb: (...args: any) => void, ms: number) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const debounce = useCallback(
    (...args: any) => {
      cancel();

      timerRef.current = setTimeout(() => {
        cb(...args);
      }, ms);
    },
    [cb, ms, cancel]
  );

  useEffect(() => cancel, [cancel]);

  return debounce;
}
