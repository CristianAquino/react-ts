import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "../models";

const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_ROUTES.LOGIN} replace />
  );
};

export default AuthGuard;
