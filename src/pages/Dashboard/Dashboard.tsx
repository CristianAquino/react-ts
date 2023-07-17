import { ComponentContext1, ComponentContext2 } from "./components";
import DashboardProvider from "./context/Dashboard.context";

const Dashboard = () => {
  return (
    <div>
      <DashboardProvider>
        <ComponentContext1 />
        <ComponentContext2 />
      </DashboardProvider>
    </div>
  );
};
export default Dashboard;
