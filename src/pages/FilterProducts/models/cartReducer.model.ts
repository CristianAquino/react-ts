export interface CartActionReducer<T> {
  type: string;
  payload?: T;
}
