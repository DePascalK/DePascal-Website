import { Link, useLocation } from "react-router";
import { Button } from "flowbite-react";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <title>Page not found</title>
      <p className="text-6xl font-bold text-gray-300 dark:text-gray-700">404</p>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        There's nothing at <code className="font-mono">{pathname}</code>.
      </p>
      <Button as={Link} to="/">
        Back to home
      </Button>
    </section>
  );
}