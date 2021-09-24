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
  gap: 10rem;
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
    gap: 2rem;
  }
`;

export const RightDash = styled.div`
  background-color: #1a1a1a;
  flex-basis: 85%;
  /* border: 2px solid red; */
  height: 100%;

  display: flex;
  flex-direction: column;

  .first {
    flex-basis: 10%;
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
  }
  .second {
    flex-basis: 30%;
    border: 2px solid red;
  }

  .snapshots *{
    border: 2px solid red;
  }

  .third {
    flex-basis: 60%;
    border: 2px solid red;
  }
`;
