import { useState } from "react";
import { useTaskDispatch } from "../context/TaskContext";
import Edit from "./Edit";

export default function Task({ task }) {
  const dispatch = useTaskDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleDelete = (task) => {
    dispatch({ type: "delete", task: task });
  };

  const handleUpdate = (updatedTask) => {
    dispatch({ type: "update", task: updatedTask });
  };

  const handleCheck = (task) => {
    dispatch({ type: "check", task: task });
  };

  const onUpdateClick = () => {
    handleUpdate({ ...task, text: updatedText });
    setIsEditing(false);
  };

  const doneClass = task.done
    ? "px-4 py-2 bg-green-500 rounded-md"
    : "px-4 py-2  bg-red-500 rounded-md";

  return (
    <div className="border rounded-md bg-slate-200">
      {isEditing ? (
        <Edit
          updatedTask={updatedText}
          onEdit={setUpdatedText}
          onUpdate={onUpdateClick}
        />
      ) : (
        <div className="flex justify-between items-center w-full flex-1 p-5">
          <p>{task.text}</p>

          <div className="flex gap-3">
            <button
              className={doneClass}
              onClick={() => handleCheck(task)}
            >
              {task.done ? "Done" : "Not Done"}
            </button>
            <button
              className="bg-red-600 px-4 py-2 rounded-md text-white"
              onClick={() => handleDelete(task)}
            >
              Delete
            </button>
            <button
              className="bg-orange-400 px-4 py-2 rounded-md text-white"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
