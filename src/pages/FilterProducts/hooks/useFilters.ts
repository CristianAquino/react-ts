import { useCustomerContext } from ".";
import { FiltersContext } from "../../../context";
import { Product } from "../models";

export const useFilters = () => {
  const { filters, setFilters } = useCustomerContext(FiltersContext);

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters, filters };
};
