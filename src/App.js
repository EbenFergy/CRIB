import React from "react";
import AppStyle from "./Appstyle";
import LeftStyle from "./LeftComponents/LeftStyle.js";
import Form from "./RightComponents/Login_form/Form";
import companyLogo from "./icons/logo.svg";
function App() {
  return (
    <AppStyle>
      <img src={companyLogo} alt="logo" className="bigLogo" />
      <LeftStyle style={{ width: "40%" }} className="border">
        <img src={companyLogo} alt="logo" className="smallLogo" />
        <h1>CriB!</h1>
        <h4>Hover any of the icons for some action.</h4>
      </LeftStyle>
      <Form className="border" />
    </AppStyle>
  );
}

export default App;
