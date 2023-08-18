import { ChangeEvent, useId } from "react";
import { FiltersContext } from "../../../../context";
import { useCustomerContext } from "../../hooks";
import { FiltersContent } from "../../styles";

export type FiltersProps = {};

const Filters = ({}: FiltersProps) => {
  const {
    filters: { minPrice },
    setFilters,
  } = useCustomerContext(FiltersContext);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, minPrice: parseInt(e.target.value) }));
  };

  const handleCahngeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };
  return (
    <FiltersContent>
      <div>
        <label htmlFor={minPriceFilterId}>Min Price </label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleMinPrice}
          value={minPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCahngeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </FiltersContent>
  );
};

export default Filters;
