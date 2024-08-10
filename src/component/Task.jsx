import { useState } from "react";
import { useTaskDispatch } from "../context/TaskContext";
import Edit from "./Edit";
import TaskUI from "./TaskUI";

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

  return (
    <div className="border rounded-md bg-slate-200">
      {isEditing ? (
        <Edit
          updatedTask={updatedText}
          onEdit={setUpdatedText}
          onUpdate={onUpdateClick}
        />
      ) : (
        <TaskUI
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={setIsEditing}
        />
      )}
    </div>
  );
}
