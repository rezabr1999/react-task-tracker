import "./App.css";

import TaskProvider from "./context/TaskContext";
import { useTask } from "./context/TaskContext";

import Form from "./component/Form";
import TaskList from "./component/TaskList";

function App() {
  const tasks = useTask();
  console.log(tasks);

  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
        <Form />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
