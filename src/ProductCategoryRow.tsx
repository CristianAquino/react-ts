interface Category {
  category: string;
}

const ProductCategoryRow = ({ category }: Category) => {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
};
export default ProductCategoryRow;
