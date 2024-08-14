import { IoCheckbox } from "react-icons/io5";
import { IoSquareOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function TaskUI({
  task,
  handleCheck,
  handleDelete,
  handleEdit,
}) {
  const doneClass = task.done
    ? "px-4 py-2 bg-green-500 rounded-md flex-1"
    : "px-4 py-2  bg-red-500 rounded-md flex-1";

  return (
    <div className="flex justify-between gap-4 items-center w-full flex-1 px-6">
      <div className="flex items-center justify-center w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleCheck(task)}
        >
          {task.done ? (
            <IoCheckbox className="w-6 h-6 fill-green-700 dark:fill-green-300" />
          ) : (
            <IoSquareOutline className="w-6 h-6 fill-gray-500" />
          )}
        </div>
        <p className="flex-1 p-4 mb-1">{task.text}</p>
      </div>

      <div className="flex gap-3 w-full justify-end items-center">
        <FaEdit
          className="w-5 h-5 fill-emerald-800 dark:fill-emerald-300 cursor-pointer"
          onClick={() => handleEdit(task)}
        />

        <FaTrashAlt
          className="w-5 h-5 fill-red-600 dark:fill-red-400 cursor-pointer"
          onClick={() => handleDelete(task)}
        />
      </div>
    </div>
  );
}
