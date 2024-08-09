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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
