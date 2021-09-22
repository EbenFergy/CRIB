import React, { useState } from "react";
import FormStyle from "./FormStyle";
import Button from "../../UI/Button/Button";
import companyLogo from "../../icons/logo.svg";

const Form = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  console.log(username, password);

  return (
    <FormStyle>
      <img src={companyLogo} alt="logo" className="formBigLogo" />
      <img src={companyLogo} alt="logo" className="logo" />
      <div className="wrapper">
        <div className="write-up">
          Login to your <br /> Dashboard
        </div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <input
              type="email"
              placeholder="email"
              required
              onChange={usernameHandler}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              required
              onChange={passwordHandler}
            />
          </div>
          <Button type="submit">LOGIN</Button>
        </form>
      </div>
    </FormStyle>
  );
};

export default Form;
