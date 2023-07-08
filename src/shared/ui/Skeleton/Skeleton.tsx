import { CSSProperties, memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
}

export const Skeleton = memo(function Skeleton({
  className,
  height,
  width,
  borderRadius,
}: SkeletonProps) {
  const cls = classNames(styles.Skeleton, {}, [className]);

  const sceletonStyles: CSSProperties = { height, width, borderRadius };

  return <div className={cls} style={sceletonStyles}></div>;
});
