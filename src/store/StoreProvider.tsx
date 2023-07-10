import { createContext, useContext, useReducer } from "react";
import reducer, { initialStore } from "./storeReducer";
import { actionStore, dispatch, StateInterface, valueContext } from "../models";

const StoreContext = createContext<valueContext>({} as valueContext);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useReducer<
    (state: StateInterface, action: actionStore) => StateInterface
  >(reducer, initialStore);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

// custom hooks
const useStore: () => StateInterface = () => useContext(StoreContext)[0];
const useDispatch: () => dispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default StoreProvider;
