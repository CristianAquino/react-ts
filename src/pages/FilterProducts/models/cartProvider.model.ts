export interface CartProviderProps<T> {
  cart: T[];
  addToCart: (product: T) => void;
  removeFromCart: (product: T) => void;
  clearCart: () => void;
}
