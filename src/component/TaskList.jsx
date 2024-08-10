import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <div className="flex flex-col gap-6">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}
