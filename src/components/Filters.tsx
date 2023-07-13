import { FilterValue } from "../models";
import { FILTERS_BUTTONS } from "../models/consts.models";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}
const Filters = ({ filterSelected, onFilterChange }: Props) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => (
        <li key={key}>
          <a
            className={`${filterSelected === key && "selected"}`}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              onFilterChange(key as FilterValue);
            }}
          >
            {literal}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Filters;
