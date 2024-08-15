import "./App.css";
import { useTask } from "./context/TaskContext";
import { useTheme } from "./context/ThemeContext";

import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import ThemeToggleButton from "./component/ThemeToggleButton";

import { Routes, Route } from "react-router-dom";

function App() {
  const theme = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-slate-600">
        <div className="max-w-3xl mx-auto p-5 flex flex-col">
          <ThemeToggleButton />
          <Routes>
            <Route
              path="/react-task-tracker"
              element={<Home />}
            />
            <Route
              path="task/:id"
              element={<TaskPage />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
