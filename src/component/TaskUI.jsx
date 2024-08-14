import { IoCheckbox } from "react-icons/io5";
import { IoSquareOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function TaskUI({
  task,
  handleCheck,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="flex justify-between gap-4 items-center w-full flex-1 px-6 hover:bg-purple-200 hover:rounded-lg  dark:hover:bg-slate-500 cursor-pointer">
      <div className="flex items-center justify-center">
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

        <Link
          to={`/task/${task.id}`}
          className="flex-1 p-4 mb-1 text-blue-700 hover:text-purple-900 dark:text-blue-300 dark:hover:text-purple-300"
        >
          {task.text}
        </Link>
      </div>

      <div className="flex gap-3 justify-end items-center m-4">
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
