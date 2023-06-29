import { memo } from "react";

import { useTheme, Theme } from "app/providers/ThemeProvider";

import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import LightThemeIcon from "shared/assets/icons/lightThemeIcon.svg";
import DarkThemeIcon from "shared/assets/icons/darkThemeIcon.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  const cls = classNames("", {}, [className]);

  return (
    <Button variant={ButtonVariant.CLEAR} className={cls} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
});
