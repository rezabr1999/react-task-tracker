import { useTheme } from "../context/ThemeContext";
import { useThemeDispatch } from "../context/ThemeContext";
import { IoMdSunny } from "react-icons/io";
import { MdNightsStay } from "react-icons/md";

export default function ThemeToggleButton() {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();

  const changeTheme = () => {
    themeDispatch({ type: theme === "light" ? "dark" : "light" });
  };

  const Icon = theme === "light" ? MdNightsStay : IoMdSunny;

  return (
    <button
      className="flex items-center justify-center py-2 text-center border-black bg-purple-600 dark:bg-yellow-600 rounded-lg text-white w-16"
      onClick={changeTheme}
    >
      <Icon />
    </button>
  );
}
