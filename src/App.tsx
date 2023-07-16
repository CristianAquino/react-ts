import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES, Roles } from "./models";
import { AuthGuard, RolGuard } from "./guards";
import { RoutesWithNotFound } from "./helpers";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Logout } from "./components/Logout";
import { Dashboard } from "./pages";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PRIVATE_ROUTES.PRIVATE} />}
              />
              <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PRIVATE_ROUTES.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route element={<RolGuard rol={Roles.ADMIN} />}>
                <Route
                  path={PRIVATE_ROUTES.DASHBOARD}
                  element={<Dashboard />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
};
export default App;
