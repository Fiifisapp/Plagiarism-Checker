import React from "react";
import Dashboardlogo from "../../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { DashLogo, Logo, SidebarContainer } from "./Adminboard.Style";

const Adminboard = () => {
  return (
    <div>
      <DashLogo className="dash-logo">
        <Logo src={Dashboardlogo} alt="" />
      </DashLogo>
      

      <SidebarContainer className="sidebar-container">
        <NavLink to="">Checkers</NavLink>
        <NavLink to="documents">Documents</NavLink>
        <NavLink to="">Users</NavLink>
        logout
      </SidebarContainer>
      <Outlet/>
    </div>
  );
};

export default Adminboard;
