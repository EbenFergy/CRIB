import React, {  useReducer } from "react";
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

const initialState = {
  username: "",
  password: "",
  errorModal: false,
  passwordError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [action.key]: action.value,
      };

    case "ERRORS":
      return {
        ...state,
        [action.key1]: action.value,
        [action.key2]: action.value,
      };  
    default:
      return state;
  }
};

const Form = ({ loggedInStatus, bringUsername }) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorModal, setErrorModal] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const usernameHandler = (e) => {
    dispatch({
      type: "UPDATE_INPUT",
      value: e.target.value.trim(),
      key: "username",
    });
  };

  // console.log(username);

  const passwordHandler = (e) => {
    dispatch({
      type: "UPDATE_INPUT",
      value: e.target.value.trim(),
      key: "password",
    });
  };

  const closeModal = () => {
    dispatch({
      type: "ERRORS",
      value: false,
      key1: "errorModal",
      key2: "passwordError"
    });
    // setErrorModal(false);
    // setPasswordError(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // let userProfile;

    state.username.length === 0 || state.password.length === 0
      ? dispatch({type:'ERRORS', value:true, key1:'errorModal'  }) 
      : state.password.length >= 7
      ? bringUsername(state.username) || loggedInStatus(true)
      : dispatch({type:'ERRORS', value:true, key2:'passwordError'  });
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
              type="text"
              placeholder="username"
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
          errorModal={state.errorModal}
          closeModal={closeModal}
          passwordError={state.passwordError}
        />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <BackDrop
          errorModal={state.errorModal}
          closeModal={closeModal}
          passwordError={state.passwordError}
        />,
        document.getElementById("backDrop")
      )}
    </FormStyle>
  );
};

export default Form;
