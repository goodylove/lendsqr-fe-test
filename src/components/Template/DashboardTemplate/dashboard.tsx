import React from "react";
import NavBar from "../../Navigations/NavBar/NavBar";

function DashBoardTemplate() {
  return (
    <main className="dashboard">
      <NavBar />
      <div className="dashboard-container">
        <h2>sidebar</h2>
        <div>
          <h3> mainlayout</h3>
        </div>
      </div>
    </main>
  );
}

export default DashBoardTemplate;
