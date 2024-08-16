import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";

export default function TaskPage() {
  const tasks = useTask();
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));

  const creationDateStap = new Date(task.id);
  const creationDate = creationDateStap.toDateString();

  return (
    <div className="min-h-screen w-full dark:text-white mt-5">
      <h1 className="text-3xl pb-10 ">{task.text}</h1>
      <p className="bg-slate-700 text-white mt-4 dark:bg-slate-200 dark:text-slate-700 inline-block p-3 rounded-sm w-52 text-center">
        {creationDate}
      </p>
    </div>
  );
}
