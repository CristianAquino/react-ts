import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserAdapter } from "../../adapters";
import { useFetchAndLoad } from "../../hooks";
import { PRIVATE_ROUTES } from "../../models";
import { createUser } from "../../redux/states/user";
import { getLogin } from "../../services";

const Login = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await callEndpoint(getLogin());
      dispatch(createUser(createUserAdapter(result)));
      navigate(`/${PRIVATE_ROUTES.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      <h2>Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
