import ThemeToggleButton from "../component/ThemeToggleButton";
import Form from "../component/Form";
import TaskList from "../component/TaskList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-3xl mx-auto w-full">
      <Form />
      <TaskList />
    </div>
  );
}
