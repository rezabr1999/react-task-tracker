import { FaSave } from "react-icons/fa";

export default function Edit({ updatedTask, onEdit, onUpdate }) {
  return (
    <div className="flex rounded-md bg-white px-6 dark:bg-slate-700 justify-between ">
      <input
        className="p-5 outline-none justify-between items-center flex-1 dark:bg-slate-700"
        type="text"
        value={updatedTask}
        onChange={(e) => onEdit(e.target.value)}
      />
      <div className="flex items-center justify-end px-3 ">
        <FaSave
          className="w-5 h-5 fill-blue-300 cursor-pointer"
          onClick={onUpdate}
        />
      </div>
    </div>
  );
}
