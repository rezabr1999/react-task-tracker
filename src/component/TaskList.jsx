import { useTaskDispatch } from "../context/TaskContext";
import Task from "./Task";

export default function TaskList({ tasks }) {
  const dispatch = useTaskDispatch();

  const handleDelete = (task) => {
    dispatch({ type: "delete", task: task });
  };

  const handleUpdate = (updatedTask) => {
    dispatch({ type: "update", task: updatedTask });
  };

  const handleCheck = (task) => {
    dispatch({ type: "check", task: task });
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
}
