import React from "react";
import { DashboardStyle, LeftDash, RightDash } from "./DashboardStyle";

// import RightDash

const Dashboard = () => {
  return (
    <DashboardStyle>
      <LeftDash>
        <h1>CriB!</h1>
        <div className="leftDashMenu">
          <div className="div">Dashboard</div>
          <div className="div">Houses</div>
          <div className="div">Payment Details</div>
          <div className="div">Learning Center</div>
          <div className="div">FAQs</div>
          <div className="div">Settings</div>
        </div>
        <div className="logout">Logout</div>
      </LeftDash>
      <RightDash>
        <div className="first">
          <div>
            <p>Hi Charles</p> <h3>Welcome to the CRiB</h3>
          </div>
          <div>
            <input type="search" placeholder="search" />
          </div>
        </div>
        <div className="second">
          <div className='snapshots'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="third"></div>
      </RightDash>
    </DashboardStyle>
  );
};

export default Dashboard;
