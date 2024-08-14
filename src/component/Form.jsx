import React, { useState } from "react";
import { useTaskDispatch } from "../context/TaskContext";

export default function Form() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useTaskDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch({
        type: "add",
        task: { id: Date.now(), text: taskText, done: false },
      });
      setTaskText("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full"
    >
      <input
        className="px-7 py-2 border-2 rounded-md focus:border-teal outline-none flex-1 dark:bg-slate-700 dark:border-slate-700 dark:text-white"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button
        className="px-7 py-2 bg-indigo-700 dark:bg-indigo-500 rounded-md text-white "
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}
