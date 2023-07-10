export interface StateInterface {
  user: User;
  products: Product[];
}

interface Product {
  id: number;
  title: string;
}

interface User {
  id: number;
  name: string;
}

export type dispatch = (value: actionStore) => void;
export type valueContext = [StateInterface, dispatch];
export type actionStore = { type: string; payload?: any };
