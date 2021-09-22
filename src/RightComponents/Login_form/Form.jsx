import React, { useState } from "react";
import FormStyle from "./FormStyle";
import Button from "../../UI/Button/Button";
import companyLogo from "../../icons/logo.svg";
import { ModalStyle, DarkOpacity } from "../../UI/Modal/ModalStyle";
import Cards from "../../UI/Cards/Cards";
import ReactDOM from "react-dom";

const Modal = ({ errorModal, closeModal, passwordError }) => {
  return errorModal ? (
    <ModalStyle>
      <Cards className="background">
        <h5>Please put in a valid username or Password</h5>
        <Button onClick={closeModal}>Close</Button>
      </Cards>
    </ModalStyle>
  ) : passwordError ? (
    <ModalStyle>
      <Cards className="background">
        <h5>Password must contain 7 or more characters!</h5>
        <Button onClick={closeModal}>Close</Button>
      </Cards>
    </ModalStyle>
  ) : null;
};

const BackDrop = ({ errorModal, closeModal, passwordError }) => {
  return errorModal || passwordError ? (
    <DarkOpacity onClick={closeModal} />
  ) : null;
};

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const usernameHandler = (e) => {
    setUsername(e.target.value.trim());
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value.trim());
  };

  const closeModal = () => {
    setErrorModal(false);
    setPasswordError(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let userProfile;

    username.length === 0 || password.length === 0
      ? setErrorModal(true)
      : password.length >= 7
      ? (userProfile = {
          username,
          password,
        })
      : setPasswordError(true);

    console.log(typeof userProfile);
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

      {ReactDOM.createPortal(
        <Modal
          errorModal={errorModal}
          closeModal={closeModal}
          passwordError={passwordError}
        />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <BackDrop
          errorModal={errorModal}
          closeModal={closeModal}
          passwordError={passwordError}
        />,
        document.getElementById("backDrop")
      )}
    </FormStyle>
  );
};

export default Form;
