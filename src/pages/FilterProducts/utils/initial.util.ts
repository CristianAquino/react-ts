import {
  CartProviderProps,
  FiltersProviderProps,
  Product,
  ProductFilter,
} from "../models";

export const initialProduct: Product = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
};

export const initialFilter: ProductFilter = {
  category: "all",
  minPrice: 0,
};

export const initialStateCartReducer: Product[] = [];

export const initialFiltersContext: FiltersProviderProps = {
  filters: initialFilter,
  setFilters: () => {},
};

export const initialCartContext: CartProviderProps<Product> = {
  cart: [],
  addToCart: (initialProduct: Product) => {},
  removeFromCart: (initialProduct: Product) => {},
  clearCart: () => {},
};
