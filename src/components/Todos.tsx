import { ListOfTodos, TodoId, TodoIdCompleted } from "../models";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onDeleteTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({ id, completed }: TodoIdCompleted) => void;
}

const Todos = ({ todos, onDeleteTodo, onToggleCompleted }: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed && "complete"}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDeleteTodo={onDeleteTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
export default Todos;
