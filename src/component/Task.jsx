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

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={onUpdateClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>{task.text}</p>
          <p onClick={() => handleCheck(task)}>
            {task.done ? "Done" : "Not Done"}
          </p>
          <button onClick={() => handleDelete(task)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
