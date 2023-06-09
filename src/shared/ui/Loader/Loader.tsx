import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = "" }) => {
  const cls = classNames("lds-ring", {}, [className]);

  return (
    <div className={cls}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
