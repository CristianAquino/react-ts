import { StateInterface, actionStore } from "../models";

const enum STORE_TYPE {
  AUTHLOGIN = "authlogin",
  AUTHLOGOUT = "authlogout",
  PRODUCTDELETEALL = "productdeleteall",
  PRODUCTCHANGE = "productchange",
}

const initialStore = {
  user: { id: 1, name: "test" },
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
};

const reducer = (state: StateInterface, action: actionStore) => {
  switch (action.type) {
    case STORE_TYPE.AUTHLOGOUT:
      return {
        ...state,
        user: null,
      };
    case STORE_TYPE.AUTHLOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case STORE_TYPE.PRODUCTDELETEALL:
      return {
        ...state,
        products: [],
      };
    case STORE_TYPE.PRODUCTCHANGE:
      return {
        ...state,
        products: [{ id: 3, title: "Product #3" }],
      };
    default:
      return state;
  }
};

export { initialStore, STORE_TYPE };
export default reducer;
