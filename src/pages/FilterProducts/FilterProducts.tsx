import { useState } from "react";
import { Cart, Footer, Header, Products } from "./components";
import { useFilters } from "./hooks";
import { Product } from "./models";

import { products as initialProducts } from "./data/products.json";
import { CartProvider } from "./context";

export type FilterProductsProps = {};

const FilterProducts = ({}: FilterProductsProps) => {
  const [products] = useState<Product[]>(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
};

export default FilterProducts;
