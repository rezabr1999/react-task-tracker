export default function TaskUI({
  task,
  handleCheck,
  handleDelete,
  handleEdit,
}) {
  const doneClass = task.done
    ? "px-4 py-2 bg-green-500 rounded-md"
    : "px-4 py-2  bg-red-500 rounded-md";

  return (
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
          onClick={() => handleEdit(true)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
