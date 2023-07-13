import { useCallback, useEffect, useRef } from "react";

export function useThrottle(cb: (...args: any) => void, ms: number) {
  const throttleRef = useRef<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const throttle = useCallback(
    (...args: any) => {
      if (throttleRef.current) return;

      cb(...args);

      throttleRef.current = true;

      timerRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, ms);
    },
    [cb, ms]
  );

  useEffect(() => cancel, [cancel]);

  return throttle;
}
