import styled from "styled-components";

const FormStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  width: 60%;
  background-color: #212121;

  /* border: 10px solid black; */

  img {
    position: absolute;
    top: 10rem;
    /* margin-bottom: 5rem; */
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

  Button {
    /* width: 50%; */
  }
  /* 
  form div {
    width: fit-content;
    border: 10px solid black;
  } */

  form input {
    width: 15rem;
    padding-top: 4px;
    padding-bottom: 4px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: none;
    appearance: none;
    outline: none;
    color: #ffff;
    /* border: 10px solid black; */
  }
`;
export default FormStyle;
