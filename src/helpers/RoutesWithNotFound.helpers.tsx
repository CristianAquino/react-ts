import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default RoutesWithNotFound;
