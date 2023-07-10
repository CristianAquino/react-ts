import { useReducer } from "react";

type contadorAction = { type: string };

const enum REDUCER_TYPES {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  RESET = "reset",
}

const reducer = (state: number, action: contadorAction) => {
  switch (action.type) {
    case REDUCER_TYPES.INCREMENT:
      return state + 1;
    case REDUCER_TYPES.DECREMENT:
      return state - 1;
    case REDUCER_TYPES.RESET:
      return 0;
    default:
      return state;
  }
};
const CounterApp = () => {
  const [counter, dispatch] = useReducer<
    (state: number, action: contadorAction) => number
  >(reducer, 0);
  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button onClick={() => dispatch({ type: REDUCER_TYPES.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: REDUCER_TYPES.DECREMENT })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: REDUCER_TYPES.RESET })}>
        Reset
      </button>
    </div>
  );
};
export default CounterApp;
