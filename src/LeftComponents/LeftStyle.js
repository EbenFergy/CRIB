import styled from "styled-components";

const LeftStyle = styled.div`
  background: rgb(63, 34, 101);
  background: linear-gradient(
    180deg,
    rgba(63, 34, 101, 1) 0%,
    rgba(139, 47, 202, 1) 100%
  );
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255);
  /* border: 2px solid; */
  

  h1 {
    font-family: "Audiowide", sans-serif;
    margin: 0;
  }

  h4 {
    font-weight: 400;
    margin: 0;
  }
`;

export default LeftStyle;
