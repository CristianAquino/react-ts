import { PRODUCT_TYPE } from "../enums/productEnum";
import { ProductAction, ProductModel } from "../models/products";

const initialProductState = {
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
  cart: [{ id: 1, title: "Product #1", quantity: 1 }],
  activeProduct: { id: 2, title: "Product #2" },
};

const productReducer = (state: ProductModel, action: ProductAction) => {
  switch (action.type) {
    case PRODUCT_TYPE.PRODUCTSHOW:
      return { ...state, activeProduct: action.payload };
    case PRODUCT_TYPE.PRODUCTADDTOCART: {
      const newProduct = action.payload;
      const productInCart = state.cart.find(
        (item) => item.id === newProduct.id
      );
      return productInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newProduct.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newProduct, quantity: 1 }],
          };
    }
    case PRODUCT_TYPE.PRODUCTREMOVETOCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case PRODUCT_TYPE.PRODUCTREMOVEONETOCART: {
      const productDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      return productDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            }),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    default:
      return state;
  }
};

export { initialProductState };
export default productReducer;
