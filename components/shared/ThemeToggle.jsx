"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme("light"); // systemTheme is optional if you want to support system themes
  const [mounted, setMounted] = useState(false);

  // Ensures theme state sync after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Log the current theme to the console
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="toggle-theme">
      {theme === "light" ? <MdDarkMode className="text-3xl"></MdDarkMode> : <MdLightMode className="text-3xl"></MdLightMode>}
    </div>
  );
};

export default ThemeToggle;
