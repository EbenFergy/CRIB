import React, { useState } from "react";
import AppStyle from "./Appstyle";
import LeftStyle from "./LeftComponents/LeftStyle.js";
import Form from "./RightComponents/Login_form/Form";
import companyLogo from "./icons/logo.svg";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInStatus = (bool) => {
    return bool ? setIsLoggedIn(true) : null;
  };

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          <AppStyle>
            <img src={companyLogo} alt="logo" className="bigLogo" />
            <LeftStyle className="border">
              <img src={companyLogo} alt="logo" className="smallLogo" />
              <h1>CriB!</h1>
              <h4>Hover any of the icons for some action.</h4>
            </LeftStyle>
            <Form className="border" loggedInStatus={loggedInStatus} />
          </AppStyle>
        </>
      )}
    </>
  );
}

export default App;
