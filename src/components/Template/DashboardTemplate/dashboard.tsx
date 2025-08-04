import React from "react";
import NavBar from "../../Navigations/NavBar/NavBar";
import SideBar from "../../Navigations/SiderBar/sideBar";
import "./dashboard.modules.scss";
import { Outlet } from "react-router-dom";

function DashBoardTemplate() {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  return (
    <>
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="main-layout">
        <Outlet />
      </div>
    </>
  );
}

export default DashBoardTemplate;
