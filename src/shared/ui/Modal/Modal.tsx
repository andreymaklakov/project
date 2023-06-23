import { FC, useCallback, useEffect, useRef, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";

import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  lazy = false,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpening,
    [styles.isClosing]: isClosing,
  };
  const cls = classNames(styles.Modal, mods, [className]);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timeRef.current = setTimeout(() => {
        onClose();

        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleOpen = useCallback(() => {
    if (isOpen) {
      setIsMounted(true);

      timeRef.current = setTimeout(() => {
        setIsOpening(true);
      });
    }
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    handleOpen();

    return () => {
      clearTimeout(timeRef.current);
      setIsMounted(false);
      setIsOpening(false);
    };
  }, [handleOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cls}>
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
