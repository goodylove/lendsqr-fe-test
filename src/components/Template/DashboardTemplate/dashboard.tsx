import React from "react";
import NavBar from "../../Navigations/NavBar/NavBar";
import SideBar from "../../Navigations/SiderBar/sideBar";
import"./dashboard.modules.scss"

function DashBoardTemplate() {
    const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  return (
    <main className="overall-dashboard-container">
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="dashboard-container">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="main-layout">
          <h3> mainlayout</h3>
        </div>
      </div>
    </main>
  );
}

export default DashBoardTemplate;
