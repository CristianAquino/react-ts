import useCounter from "./hooks/useCounter";

const CounterApp = () => {
  const [counter, increment, reset] = useCounter();

  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterApp;
