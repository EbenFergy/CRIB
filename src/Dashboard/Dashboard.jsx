import React from "react";
import { DashboardStyle, LeftDash, RightDash } from "./DashboardStyle";

// import RightDash

const Dashboard = () => {
  return (
    <DashboardStyle>
      <LeftDash>
        <div>CRiB</div>
        <div>
          <div className="div">Dashboard</div>
          <div className="div">Houses</div>
          <div className="div">Payment Details</div>
          <div className="div">Learning Center</div>
          <div className="div">FAQs</div>
          <div className="div">Settings</div>
        </div>
        <div className="logout">Logout</div>
      </LeftDash>
      <RightDash></RightDash>
    </DashboardStyle>
  );
};

export default Dashboard;
