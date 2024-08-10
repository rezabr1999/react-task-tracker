export default function Edit({ updatedTask, onEdit, onUpdate }) {
  return (
    <div className="flex rounded-md bg-white p-2">
      <input
        className="flex-1 p-5 outline-none justify-between items-center"
        type="text"
        value={updatedTask}
        onChange={(e) => onEdit(e.target.value)}
      />
      <div className="flex items-center px-3">
        <button
          className="bg-green-600 px-4 py-2 rounded-md text-white w-32"
          onClick={onUpdate}
        >
          Save
        </button>
      </div>
    </div>
  );
}
