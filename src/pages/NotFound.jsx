import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col items-center justify-center p-10 min-h-screen dark:text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/react-task-tracker"
        className="text-blue-500 underline mt-6 dark:text-blue-300"
      >
        Go back to Home
      </Link>
    </div>
  );
}
