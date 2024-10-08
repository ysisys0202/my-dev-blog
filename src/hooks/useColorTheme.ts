import { colorThemeState } from "@/store/colorTheme";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const setColotTheme = (colorTheme: string) => {
  document.body.setAttribute("data-color-theme", colorTheme);
};

const useColorTheme = () => {
  const [isMatchedDarkTheme, setIsMatchedDarkTheme] = useState<boolean>();
  const [colorTheme, setColorTheme] = useRecoilState(colorThemeState);
  const isDark = colorTheme == "dark";

  useEffect(() => {
    setIsMatchedDarkTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const savedColorTheme = window.localStorage.getItem("colorTheme");
    if (savedColorTheme) {
      return setColorTheme(savedColorTheme as "light" | "dark");
    }
    setColorTheme(isMatchedDarkTheme ? "dark" : "light");
  }, [isMatchedDarkTheme]);

  const handleColorThemeToggle = () => {
    setColorTheme(isDark ? "light" : "dark");
    setColotTheme(isDark ? "light" : "dark");
    window.localStorage.setItem("colorTheme", isDark ? "light" : "dark");
  };

  return { colorTheme, handleColorThemeToggle };
};

export default useColorTheme;
