import "./App.css";
import { useTask } from "./context/TaskContext";
import { useTheme } from "./context/ThemeContext";

import Home from "./pages/Home";
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
            element={<Home />}
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
