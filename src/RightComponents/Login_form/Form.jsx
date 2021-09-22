import React, { useState } from "react";
import FormStyle from "./FormStyle";
import Button from "../../UI/Button/Button";
import companyLogo from "../../icons/logo.svg";

const Form = () => {
  return (
    <FormStyle>
      <img src={companyLogo} alt="logo" />
      <div className="wrapper">
        <div className="write-up">
          Login to your <br /> Dashboard
        </div>
        <form>
          <div>
            <input type="text" placeholder="username" required />
          </div>
          <div>
            <input type="text" placeholder="password" required />
          </div>
          <Button>LOGIN</Button>
        </form>
      </div>
    </FormStyle>
  );
};

export default Form;
