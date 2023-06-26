import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface Products {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}
type category = string | null;

const ProductTable = ({ products, filterText, inStockOnly }: Products) => {
  let lastCategory: category = null;
  const rows: JSX.Element[] = [];

  products.forEach((product) => {
    // if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
    if (
      !product.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    ) {
      return;
    }
    if (product.category != lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
