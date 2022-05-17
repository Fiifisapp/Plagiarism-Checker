import React from "react";
import { SidebarContainer, Button } from "./Sidebar.Style";

const Sidebar = () => {
  return (
    <div>
      <SidebarContainer className="sidebar-container">
      <Button animationLength="2s" active>
        hello
      </Button>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
