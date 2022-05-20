import React, { useState } from "react";
import { SidebarContainer, Button } from "./Sidebar.Style";

import AdminModal from "../AdminModal/AdminModal";
import Documents from "../Documents/Documents";
import Checker from "../Checker/Checker";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  }

  return (
    <div>
      <SidebarContainer className="sidebar-container">
        
        <Button onClick={() => setOpenModal(true)}>
          Admin
        </Button>
        
        <Button onClick={toggleIndex}>Documents</Button>
        <Button onClick={toggleIndex}>Checker</Button>
        <Button>Logout</Button>
      </SidebarContainer>
      <AdminModal open={openModal} onClose={() => setOpenModal(false)} />
     {!index ? <Documents/> : <Checker/>}

    </div>
  );
};

export default Sidebar;
