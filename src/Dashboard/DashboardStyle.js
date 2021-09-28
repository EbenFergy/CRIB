import styled from "styled-components";

export const DashboardStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LeftDash = styled.div`
  color: #ffff;
  background-color: #252526;
  flex-basis: 15%;
  /* border: 2px solid green; */
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2rem 0;
  padding-left: 1.5rem;
  box-sizing: border-box;

  .logout {
    align-self: ;
  }

  h1 {
    font-family: "Audiowide", sans-serif;
    margin: 0;
    /* color: rgb(139, 47, 202); */
    background: linear-gradient(
      360deg,
      rgba(63, 34, 101, 1) 0%,
      rgba(139, 47, 202, 1) 100%
    );
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    padding: 5px 10px;
  }

  .leftDashMenu {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border: 2px solid yellow; */
    width: 100%;
  }

  .div {
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.5); */
    margin: 0;
  }

  hr {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 0;
    margin: 0;
  }
`;

export const RightDash = styled.div`
  background-color: #1a1a1a;
  flex-basis: 85%;
  /* border: 2px solid red; */
  height: 100%;

  display: flex;
  flex-direction: column;
  color: #ffff;
  padding: 0 1rem;

  .first {
    flex-basis: 10%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
  }

  .first p,
  .first h3 {
    margin: 0;
  }

  input {
    width: 15rem;
    padding: 8px 10px;
    /* border: 1px solid rgba(255, 255, 255, 0.5); */
    background-color: gray;
    appearance: none;
    outline: none;
    color: #ffff;
    font-size: 16px;
    font-weight: 200;
    border-radius: 10px;
    border: none;
    /* border: 10px solid black; */
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    font-weight: 400;
  }

  .second {
    flex-basis: 30%;
    /* border: 2px solid red; */
    display: flex;
  }

  .snapshots {
    width: 50%;
    /* border: 2px solid green; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  .snapshots * {
    /* border: 2px solid red; */
    width: 8rem;
    background-color: #252526;
  }

  .CribInformation {
    /* border: 2px solid green; */
    width: 50%;
    padding: 1rem 0 1rem 0;
    display: flex;
  }

  .CribInformation * {
    width: 100%;
    background-color: #252526;
  }

  .third {
    flex-basis: 60%;
    /* border: 2px solid red; */

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 1rem 0 1rem 0;
  }

  .third * {
    width: 15rem;
    background-color: #252526;
    margin: 0;
  }
`;
