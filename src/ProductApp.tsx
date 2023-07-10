import { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import { ProductAction, ProductModel } from "./models/products";
import { PRODUCT_TYPE } from "./enums/productEnum";

const ProductApp = () => {
  const [productState, dispatch] = useReducer<
    (state: ProductModel, action: ProductAction) => ProductModel
  >(productReducer, initialProductState);

  const { products, cart, activeProduct } = productState;
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button
              onClick={() =>
                dispatch({
                  type: PRODUCT_TYPE.PRODUCTSHOW,
                  payload: product,
                })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: PRODUCT_TYPE.PRODUCTADDTOCART,
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - quantity: {product.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: PRODUCT_TYPE.PRODUCTREMOVEONETOCART,
                  payload: product.id,
                })
              }
            >
              Remove one
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: PRODUCT_TYPE.PRODUCTREMOVETOCART,
                  payload: product.id,
                })
              }
            >
              Remove all
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};
export default ProductApp;
