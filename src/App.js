import "./App.css";
import { useTask } from "./context/TaskContext";
import { useTheme } from "./context/ThemeContext";

import Form from "./component/Form";
import TaskList from "./component/TaskList";
import ThemeToggleButton from "./component/ThemeToggleButton";
import TaskPage from "./pages/TaskPage";

import { Routes, Route } from "react-router-dom";

function App() {
  const theme = useTheme();
  const tasks = useTask();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-slate-600">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="p-5  min-h-screen flex flex-col gap-10 max-w-3xl mx-auto">
                  <ThemeToggleButton />
                  <Form />
                  <TaskList tasks={tasks} />
                </div>
              </>
            }
          />

          <Route
            path="task/:id"
            element={<TaskPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
