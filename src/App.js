import "./App.css";
import TaskProvider from "./context/TaskContext";
import { useTask } from "./context/TaskContext";

import { useTheme } from "./context/ThemeContext";
import { useThemeDispatch } from "./context/ThemeContext";

import Form from "./component/Form";
import TaskList from "./component/TaskList";

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
          <button
            onClick={changeTheme}
            className="py-2 text-center border-black bg-indigo-700 dark:bg-lime-600 rounded-full text-white w-52"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <Form />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
