import { useState } from "react";
import { Todo } from "../models";

const useTodos = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = () => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }
    setTodos([...todos, { id, title: `New Task with id: ${id}` }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return [todos, addTodo, deleteTodo] as const;
};
export default useTodos;
