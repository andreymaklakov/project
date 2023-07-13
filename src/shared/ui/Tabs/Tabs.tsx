import {
  ComponentPropsWithoutRef,
  FC,
  memo,
  ReactNode,
  useCallback,
} from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardVariant } from "../Card/Card";

import styles from "./Tabs.module.scss";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

const typedMemo: <Component extends FC<any>>(
  component: Component,
  compare?: (
    prevProps: ComponentPropsWithoutRef<Component>,
    newProps: ComponentPropsWithoutRef<Component>
  ) => boolean
) => Component = memo;

export const Tabs = typedMemo(
  <T extends string>({ className, tabs, value, onTabClick }: TabsProps<T>) => {
    const cls = classNames(styles.Tabs, {}, [className]);

    const handleClick = useCallback(
      (tab: TabItem<T>) => {
        return () => {
          onTabClick(tab);
        };
      },
      [onTabClick]
    );

    return (
      <div className={cls}>
        {tabs.map((tab) => (
          <Card
            key={tab.value}
            className={styles.tab}
            variant={
              tab.value === value ? CardVariant.NORMAL : CardVariant.OUTLINED
            }
            onClick={handleClick(tab)}
          >
            {tab.content}
          </Card>
        ))}
      </div>
    );
  }
);
