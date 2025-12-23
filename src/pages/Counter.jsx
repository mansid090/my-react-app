import Button from "../Components/Button";
import { useCounter } from "../hooks/useCounter";
export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <main className="min-h-screen min-w-screen bg-white flex flex-col justify-center items-center">
      <div className="font-bold text-5xl gap-4">
        <h1>Counter App</h1>
      </div>

      <div className="font-bold text-6xl gap-4 my-6">{count}</div>

      <div className="flex text-white gap-4 justify-center my-3 ">
        <Button
          className="bg-green-600 rounded-full w-14 h-14"
          onClick={increment}
        >
          
          +
        </Button>
        <Button
          className="bg-red-600 rounded-full w-14 h-14 "
          onClick={decrement}
        >
          -
        </Button>
      </div>
      <div>
        <Button
          className="px-3 py-2 rounded-md bg-blue-600 my-7 text-white"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </main>
  );
}
