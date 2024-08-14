import Task from "./Task";
import { useTask } from "../context/TaskContext";

export default function TaskList() {
  const tasks = useTask();
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}
