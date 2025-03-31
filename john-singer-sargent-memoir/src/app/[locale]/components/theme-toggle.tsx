'use client'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonClearFill } from "react-icons/ri";
import { MdWbSunny } from "react-icons/md";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="fixed bottom-4 right-4 p-1.5 bg-lightbrown rounded-3xl text-white"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? <MdWbSunny size={30} /> : <RiMoonClearFill size={30} />}
    </button>
  );
}
