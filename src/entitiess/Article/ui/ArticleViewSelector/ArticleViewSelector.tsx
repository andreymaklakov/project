import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

import { ArticleView } from "../../model/types/article";

import ListIcon from "shared/assets/icons/list.svg";
import CardIcon from "shared/assets/icons/card.svg";

import styles from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.CARD,
    icon: CardIcon,
  },
];

export const ArticleViewSelector = memo(function ArticleViewSelector({
  className,
  onViewClick,
  view = ArticleView.LIST,
}: ArticleViewSelectorProps) {
  const cls = classNames(styles.ArticleViewSelector, {}, [className]);
  const iconCls = (icon: ArticleView) =>
    classNames(
      "",
      {
        [styles.selected]: icon === view,
      },
      []
    );

  const { t } = useTranslation();

  return (
    <div className={cls}>
      {viewTypes.map((v) => (
        <Button
          variant={ButtonVariant.CLEAR}
          key={v.view}
          onClick={() => onViewClick(v.view)}
        >
          <Icon Svg={v.icon} className={iconCls(v.view)} />
        </Button>
      ))}
    </div>
  );
});
