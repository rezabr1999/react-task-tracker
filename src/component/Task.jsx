import { useState } from "react";

export default function Task({
  task,
  handleDelete,
  handleUpdate,
  handleCheck,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

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
        <div className="flex rounded-md">
          <input
            className="flex-1 p-5 outline-none justify-between items-center"
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <div className="flex items-center px-3">
            <button
              className="bg-green-600 px-4 py-2 rounded-md text-white w-32"
              onClick={onUpdateClick}
            >
              Save
            </button>
          </div>
        </div>
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
