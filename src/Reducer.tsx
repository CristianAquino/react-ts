import { useReducer } from "react";

// necesario realizar el tipado de las actions
interface ActionPerson {
  type: "increment" | "decrement" | "reset";
  payload?: any;
}
interface InitialPerson {
  name: string;
  age: number;
}

const initialState: InitialPerson = {
  name: "Jhon",
  age: 20,
};

const Reducer = () => {
  const reducer = (state: InitialPerson, action: ActionPerson) => {
    switch (action.type) {
      case "increment":
        return { ...state, age: state.age + 1 };
      case "decrement":
        return { ...state, age: state.age - 1 };
      case "reset":
        return { ...state, age: 20 };
      default:
        return state;
    }
  };

  const [person, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Edad: {person.age}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
export default Reducer;
