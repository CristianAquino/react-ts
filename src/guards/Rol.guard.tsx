import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { PRIVATE_ROUTES, Roles } from "../models";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  rol: Roles;
}

const RolGuard = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PRIVATE_ROUTES.PRIVATE} />
  );
};
export default RolGuard;
