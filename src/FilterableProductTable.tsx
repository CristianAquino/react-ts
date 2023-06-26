import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface Products {
  products: Product[];
}

const FilterableProductTable = ({ products }: Products) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};
export default FilterableProductTable;
