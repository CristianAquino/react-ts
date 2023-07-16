import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../helpers";
import { UserKey, resetUser } from "../../redux/states/user";
import { PUBLIC_ROUTES } from "../../models";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PUBLIC_ROUTES.LOGIN}`, { replace: true });
  };
  return <button onClick={logout}>Logout</button>;
};
export default Logout;
