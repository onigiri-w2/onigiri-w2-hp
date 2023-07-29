"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderThemeSwitcher = () => {
    if (currentTheme === "dark") {
      return <SunIcon className="h-6 w-6" />;
    } else {
      return <MoonIcon className="h-6 w-6" color="#444" />;
    }
  };
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className="rounded-md border-2 border-gray-600 p-1 dark:border-gray-300"
      role="button"
      onClick={toggleTheme}
    >
      {renderThemeSwitcher()}
    </div>
  );
};
