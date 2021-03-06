import styled from "styled-components";

const FormStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60%;
  background-color: #1a1a1a;
  overflow: hidden;

  /* border: 10px solid green; */

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-basis: 60%;
  }

  .logo {
    position: absolute;
    top: 10rem;
    transition: ease-in-out 1s;
    /* margin-bottom: 5rem; */
  }

  .logo:hover {
    transform: rotate(-360deg) scale(3);
  }

  @media only screen and (max-width: 768px) {
    .logo {
      display: none;
    }
  }

  .write-up {
    color: rgba(255, 255, 255, 0.7);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    /* border: 10px solid black; */
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* border: 10px solid black; */
  }

  form input {
    width: 15rem;
    padding: 4px 10px;
    /* border: 1px solid rgba(255, 255, 255, 0.5); */
    background-color: gray;
    appearance: none;
    outline: none;
    color: #ffff;
    font-size: 16px;
    font-weight: 200;
    border-radius: 5px;
    /* border: 10px solid black; */
  }

  form input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    font-weight: 400;
  }

  .formBigLogo {
    position: absolute;
    bottom: -5rem;
    transform: rotate(-90deg) scale(0.2);
    width: 10rem;
    opacity: 0.1;
    animation-name: move;
    animation-duration: 10s;
    /* animation-fill-mode: both; */
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes move {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(0.2);
    }
    25% {
      transform: translate(200px, -200px) rotate(-180deg) scale(0.5);
    }
    50% {
      transform: translate(0, 0) rotate(0deg) scale(0.2);
    }
    100% {
      transform: translate(-200px, -200px) rotate(180deg) scale(0.5);
    }
  }
`;
export default FormStyle;
