import { useDispatch } from "react-redux";
import { getMorty } from "../../services";
import { createUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES, Roles } from "../../models";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${PRIVATE_ROUTES.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div>
      <h2>Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
