import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../models";
import { RoutesWithNotFound } from "../../helpers";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PRIVATE_ROUTES.DASHBOARD} />} />
      <Route path={PRIVATE_ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
};
export default Private;
