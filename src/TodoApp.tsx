import { FormEvent, useReducer, useState } from "react";
import { TodosAction, TodosModels } from "./models";
import { TODOS_TYPES } from "./enums/todosEnum";

const initialTodos = [
  { id: 1, title: "Todo #1" },
  { id: 2, title: "Todo #2" },
];

const reducer = (state: TodosModels[], action: TodosAction) => {
  switch (action.type) {
    case TODOS_TYPES.ADD:
      return [...state, action.payload];
    case TODOS_TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    // ponemos llaves para crear una variable
    case TODOS_TYPES.UPDATE: {
      const todoEdit = action.payload;
      return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
    }
    default:
      return state;
  }
};
const TodoApp = () => {
  const [todos, dispatch] = useReducer<
    (state: TodosModels[], action: TodosAction) => TodosModels[]
  >(reducer, initialTodos);

  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let id;
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
    } else {
      id = 1;
    }
    const newTodo = { id, title: `${text}` };
    dispatch({ type: TODOS_TYPES.ADD, payload: newTodo });
    setText("");
  };

  return (
    <div>
      <h2>TodoApp</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              onClick={() =>
                dispatch({ type: TODOS_TYPES.DELETE, payload: todo.id })
              }
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: TODOS_TYPES.UPDATE,
                  payload: { ...todo, title: text },
                })
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
