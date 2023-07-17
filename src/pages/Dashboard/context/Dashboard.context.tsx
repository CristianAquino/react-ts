import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext<any>(null);

const DashboardProvider = ({ children }: any) => {
  const [data, setData] = useState("");
  return (
    <DashboardContext.Provider value={{ data, setData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const dashboardContext = useContext(DashboardContext);
  if (!dashboardContext) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return dashboardContext;
};
export default DashboardProvider;
