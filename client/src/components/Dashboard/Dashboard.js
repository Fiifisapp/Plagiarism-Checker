import React from "react";
import Sidebar from "../Sidebar.js/Sidebar";
import Dashboardlogo from "../../assets/logo.png";
import { DashLogo, Logo } from "./Dashboard.Style";
const Dashboard = () => {
  return (
    <div>
      <DashLogo className="dash-logo">
        <Logo src={Dashboardlogo} alt="" />
      </DashLogo>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
