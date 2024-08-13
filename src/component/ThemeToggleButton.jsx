import { useTheme } from "../context/ThemeContext";
import { useThemeDispatch } from "../context/ThemeContext";

export default function ThemeToggleButton({ icon }) {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();
  const changeTheme = () => {
    themeDispatch({ type: theme === "light" ? "dark" : "light" });
  };

  return (
    <button
      className="flex items-center justify-center py-2 text-center border-black bg-purple-600 dark:bg-yellow-600 rounded-lg text-white w-16"
      onClick={changeTheme}
    >
      {icon}
    </button>
  );
}
