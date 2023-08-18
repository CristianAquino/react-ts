import { CartActionReducer, Product } from "../models";
import { initialStateCartReducer } from "../utils";

const enum STORE_TYPE {
  ADDTOCART = "addtocart",
  REMOVETOCART = "removetocart",
  CLEARTOCART = "cleartocart",
}

const cartReducer = (
  state: Product[],
  action: CartActionReducer<Product>
): Product[] => {
  switch (action.type) {
    case STORE_TYPE.ADDTOCART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (productInCartIndex >= 0) {
        const newCart = state.slice();
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case STORE_TYPE.REMOVETOCART: {
      return state.filter((item) => item.id !== action.payload?.id);
    }
    case STORE_TYPE.CLEARTOCART: {
      return initialStateCartReducer;
    }
    default:
      return state;
  }
};

export { cartReducer, STORE_TYPE };
