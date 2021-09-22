import React, { useState } from "react";
import FormStyle from "./FormStyle";
import Button from "../../UI/Button/Button";
import companyLogo from "../../icons/logo.svg";
import { ModalStyle} from "../../UI/Modal/ModalStyle";
import Cards from '../../UI/Cards/Cards'

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const usernameHandler = (e) => {
    setUsername(e.target.value.trim());
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value.trim());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // console.log(username.length, password.length);

    if (username.length === 0 && password.length === 0) {
      setErrorModal(true);
    } else {
      const userProfile = {
        username,
        password,
      };
      console.log(userProfile);
    }
  };

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
              // required
              onChange={usernameHandler}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              // required
              onChange={passwordHandler}
            />
          </div>
          <Button type="submit">LOGIN</Button>
        </form>
      </div>
      {errorModal ? (
        <ModalStyle>
          <Cards className="background">
            <h5>Please put in a valid username or Age</h5>
            {/* <Button onClick={closeModal}>Close</Button> */}
          </Cards>
        </ModalStyle>
      ) : null}
    </FormStyle>
  );
};

export default Form;
