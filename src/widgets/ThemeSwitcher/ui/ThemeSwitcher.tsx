import { FC } from "react";

import { useTheme, Theme } from "app/providers/ThemeProvider";

import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import LightThemeIcon from "shared/assets/icons/lightThemeIcon.svg";
import DarkThemeIcon from "shared/assets/icons/darkThemeIcon.svg";

import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  const cls = classNames(styles.ThemeSwitcher, {}, [className]);

  return (
    <Button theme={ThemeButton.CLEAR} className={cls} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};
