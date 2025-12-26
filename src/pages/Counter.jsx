import Button from "../Components/Button";
import DarkModeToggle from "../Components/DarkModeToggle";
import { useCounter } from "../hooks/useCounter";
import { Link } from "react-router-dom";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900 dark:text-white flex flex-col justify-center items-center transition-colors">
      <DarkModeToggle/>
      <Link to="/" className="absolute top-6 left-6">
        <Button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:hover:white">
          ← Home
        </Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Counter App</h1>

      <div className="text-6xl font-bold mb-6">{count}</div>

      <div className="flex gap-4 mb-6">
        <Button
          className="bg-green-600 rounded-full w-14 h-14"
          onClick={increment}
        >
          +
        </Button>
        <Button
          className="bg-red-600 rounded-full w-14 h-14"
          onClick={decrement}
        >
          -
        </Button>
      </div>

      <Button
        className="px-4 py-2 rounded-md bg-blue-600"
        onClick={reset}
      >
        Reset
      </Button>
    </main>
  );
}
