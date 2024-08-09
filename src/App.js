import "./App.css";

import TaskProvider from "./context/TaskContext";
import { useTask } from "./context/TaskContext";

import Form from "./component/Form";
import TaskList from "./component/TaskList";

function App() {
  const tasks = useTask();
  console.log(tasks);

  return (
    <div className="App">
      <Form />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
