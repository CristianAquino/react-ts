import { TodoTitle } from "../models";
import CreateTodo from "./CreateTodo";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}
const Header = ({ onAddTodo }: Props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
export default Header;
