import styled from "styled-components";

export const DashboardStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LeftDash = styled.div`
  background-color: #252526;
  flex-basis: 15%;
  /* border: 2px solid green; */
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10rem;
  align-items: flex-start;
  padding: 2rem 0;
  box-sizing: border-box;

  .logout {
    align-self: ;
  }
`;

export const RightDash = styled.div`
  background-color: #1a1a1a;
  flex-basis: 85%;
  /* border: 2px solid red; */
  height: 100%;
`;
