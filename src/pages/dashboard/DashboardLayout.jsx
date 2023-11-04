import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";

const DashboardLayout = () => {

    
    
  return (
    <div className="flex gap-10">
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
