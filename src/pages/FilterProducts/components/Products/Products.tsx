import { BsCartPlus, BsCartX } from "react-icons/bs";
import { CartContext } from "../../context";
import { useCustomerContext } from "../../hooks";
import { Product } from "../../models";
import { GridProducts, ListProducts } from "../../styles";

export type ProductsProps = {
  products: Product[];
};

const Products = ({ products }: ProductsProps) => {
  const { cart, addToCart, removeFromCart } = useCustomerContext(CartContext);
  const checkProductInCart = (product: Product) =>
    cart.some((item) => item.id === product.id);
  return (
    <main className="products">
      <GridProducts>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <ListProducts key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <BsCartX /> : <BsCartPlus />}
                </button>
              </div>
            </ListProducts>
          );
        })}
      </GridProducts>
    </main>
  );
};

export default Products;
