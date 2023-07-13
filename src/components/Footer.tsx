import { FilterValue } from "../models";
import Filters from "./Filters";

interface Props {
  activeCount: number;
  completedCound: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
  onClearCompleted: () => void;
}

const Footer = ({
  activeCount = 0,
  completedCound = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending tasks
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCound > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};
export default Footer;
