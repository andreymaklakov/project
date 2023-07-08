import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(function Icon({ className, Svg }: IconProps) {
  const cls = classNames(styles.Icon, {}, [className]);

  return <Svg className={cls} />;
});
