import { useDispatch, useStore } from "../store/StoreProvider";
import { STORE_TYPE } from "../store/storeReducer";

const MyComponent = () => {
  const { user, products } = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>MyComponent</h1>
      <h2>User: {user?.name}</h2>
      <button
        onClick={() =>
          dispatch({
            type: STORE_TYPE.AUTHLOGIN,
            payload: { id: 1, name: "test" },
          })
        }
      >
        Login
      </button>
      <button onClick={() => dispatch({ type: STORE_TYPE.AUTHLOGOUT })}>
        Logout
      </button>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: STORE_TYPE.PRODUCTDELETEALL })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: STORE_TYPE.PRODUCTCHANGE })}>
        Change
      </button>
    </div>
  );
};
export default MyComponent;
