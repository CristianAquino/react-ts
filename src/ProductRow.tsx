interface ProductRowProps {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface Product {
  product: ProductRowProps;
}

const ProductRow = ({ product }: Product) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
export default ProductRow;
