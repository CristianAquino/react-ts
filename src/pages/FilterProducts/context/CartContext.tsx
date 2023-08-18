import { createContext, useReducer } from "react";
import { CartProviderProps, Product } from "../models";
import { STORE_TYPE, cartReducer } from "../reducer";
import { initialCartContext, initialStateCartReducer } from "../utils";

export const CartContext =
  createContext<CartProviderProps<Product>>(initialCartContext);

export const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(cartReducer, initialStateCartReducer);

  const addToCart = (product: Product) =>
    dispatch({ type: STORE_TYPE.ADDTOCART, payload: product });

  const removeFromCart = (product: Product) =>
    dispatch({ type: STORE_TYPE.REMOVETOCART, payload: product });

  const clearCart = () => dispatch({ type: STORE_TYPE.CLEARTOCART });

  const sharedCart: CartProviderProps<Product> = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={sharedCart}>{children}</CartContext.Provider>
  );
};
