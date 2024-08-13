import "./App.css";
import TaskProvider from "./context/TaskContext";
import { useTask } from "./context/TaskContext";

import { useTheme } from "./context/ThemeContext";
import { useThemeDispatch } from "./context/ThemeContext";

import Form from "./component/Form";
import TaskList from "./component/TaskList";

import ThemeToggleButton from "./component/ThemeToggleButton";

import { IoMdSunny } from "react-icons/io";
import { MdNightsStay } from "react-icons/md";

function App() {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();
  const tasks = useTask();

  const changeTheme = () => {
    themeDispatch({ type: theme === "light" ? "dark" : "light" });
  };

  return (
    // Apply the dark class based on the theme
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="p-5 bg-slate-100 dark:bg-slate-800 min-h-screen">
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          <ThemeToggleButton
            icon={theme === "light" ? <IoMdSunny /> : <MdNightsStay />}
          />

          <Form />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
