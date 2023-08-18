import { ProductFilter } from ".";

export interface FiltersProviderProps {
  filters: ProductFilter;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilter>>;
}
