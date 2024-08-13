import "./App.css";
import { useTask } from "./context/TaskContext";
import { useTheme } from "./context/ThemeContext";

import Form from "./component/Form";
import TaskList from "./component/TaskList";
import ThemeToggleButton from "./component/ThemeToggleButton";

function App() {
  const theme = useTheme();
  const tasks = useTask();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="p-5 bg-slate-100 dark:bg-slate-800 min-h-screen flex flex-col gap-10 max-w-3xl mx-auto">
        <ThemeToggleButton />
        <Form />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
