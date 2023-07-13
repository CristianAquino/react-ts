import { ChangeEvent } from "react";
import { TodoId, TodoIdCompleted, Todo as TypeTodo } from "../models";

interface Props extends TypeTodo {
  onDeleteTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({ id, completed }: TodoIdCompleted) => void;
}

const Todo = ({
  id,
  title,
  completed,
  onDeleteTodo,
  onToggleCompleted,
}: Props) => {
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({ id, completed: e.target.checked });
  };
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onDeleteTodo({ id });
        }}
      ></button>
    </div>
  );
};
export default Todo;
