import { useState, FormEvent } from "react";
import { TodoTitle } from "../models";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

const CreateTodo = ({ saveTodo }: Props) => {
  const [inputValue, setinputValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    saveTodo({ title: inputValue });
    setinputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
};
export default CreateTodo;
