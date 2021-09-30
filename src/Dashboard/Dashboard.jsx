import React from "react";
import { DashboardStyle, LeftDash, RightDash } from "./DashboardStyle";
import Cards from "../UI/Cards/Cards";
import Button from "../UI/Button/Button";
// import RightDash

const Dashboard = ({ loggedInStatus, username }) => {
  const logOutHandler = () => {
    localStorage.removeItem("loggedIn");
    loggedInStatus(false);
  };

  console.log(username);
  return (
    <DashboardStyle>
      <LeftDash>
        <h1>CriB!</h1>
        <div className="leftDashMenu">
          <div className="div">Dashboard</div>
          <hr />
          <div className="div">Houses</div> <hr />
          <div className="div">Payment Details</div> <hr />
          <div className="div">Learning Center</div> <hr />
          <div className="div">FAQs</div> <hr />
          <div className="div">Settings</div> <hr />
        </div>
        <Button type="button" className="logout" onClick={logOutHandler}>
          Logout
        </Button>
      </LeftDash>
      <RightDash>
        <div className="first">
          <div>
            <p>
              Hi <span>{`  ${username},`}</span>{" "}
            </p>{" "}
            <h3>Welcome to the CRiB</h3>
          </div>
          <div>
            <input type="search" placeholder="search" />
          </div>
        </div>
        <div className="second">
          <div className="snapshots">
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </div>
          <div className="CribInformation">
            <Cards></Cards>
          </div>
        </div>
        <div className="third">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      </RightDash>
    </DashboardStyle>
  );
};

export default Dashboard;
