import { FC } from "react";

import { useTheme, Theme } from "app/providers/ThemeProvider";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import LightThemeIcon from "shared/assets/icons/lightThemeIcon.svg";
import DarkThemeIcon from "shared/assets/icons/darkThemeIcon.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  const cls = classNames("", {}, [className]);

  return (
    <Button theme={ButtonTheme.CLEAR} className={cls} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};
