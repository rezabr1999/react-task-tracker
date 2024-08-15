import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";

export default function TaskPage() {
  const tasks = useTask();
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-xs mx-auto">
        <h1 className="text-lg dark:text-white">{task.text}</h1>
      </div>
    </div>
  );
}
