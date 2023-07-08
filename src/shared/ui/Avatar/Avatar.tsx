import { CSSProperties, memo, useMemo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src: string;
  size?: number;
}

export const Avatar = memo(function Avatar({
  className,
  src,
  size,
}: AvatarProps) {
  const cls = classNames(styles.Avatar, {}, [className]);

  const imgSize = useMemo<CSSProperties>(
    () => ({ width: size, height: size }),
    [size]
  );

  return <img src={src} alt="avatar" style={imgSize} className={cls} />;
});
