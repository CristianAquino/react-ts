import { createContext, useState } from "react";
import {
  FiltersProviderProps,
  ProductFilter,
} from "../pages/FilterProducts/models";
import {
  initialFilter,
  initialFiltersContext,
} from "../pages/FilterProducts/utils";

export const FiltersContext = createContext<FiltersProviderProps>(
  initialFiltersContext
);

export const FiltersProvider = ({ children }: any) => {
  const [filters, setFilters] = useState<ProductFilter>(initialFilter);
  const sharedFilters: FiltersProviderProps = {
    filters,
    setFilters,
  };
  return (
    <FiltersContext.Provider value={sharedFilters}>
      {children}
    </FiltersContext.Provider>
  );
};
