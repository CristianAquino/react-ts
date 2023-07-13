import { useState } from "react";
import Todos from "./components/Todos";
import { FilterValue, TodoId, TodoIdCompleted, TodoTitle } from "./models";
import { TODO_FILTERS } from "./models/consts.models";
import Footer from "./components/Footer";
import Header from "./components/Header";

const mockTodos = [
  { id: "1", title: "Aprender React con TypeScript", completed: true },
  { id: "2", title: "Aprender Redux con TypeScript", completed: false },
  { id: "3", title: "Aprender React Native con TypeScript", completed: false },
  { id: "4", title: "Aprender Node con TypeScript", completed: false },
];
const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );
  const handleDeleteTodo = ({ id }: TodoId) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompletedTodo = ({ id, completed }: TodoIdCompleted) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleFilterChangeTodo = (filter: FilterValue) => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompletedTodo = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCound = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed;
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed;
    }
    return todo;
  });
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onDeleteTodo={handleDeleteTodo}
        onToggleCompleted={handleCompletedTodo}
      />
      <Footer
        activeCount={activeCount}
        completedCound={completedCound}
        onClearCompleted={handleRemoveAllCompletedTodo}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChangeTodo}
      />
    </div>
  );
};
export default App;
