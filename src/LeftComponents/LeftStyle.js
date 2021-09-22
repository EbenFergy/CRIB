import styled from "styled-components";

const LeftStyle = styled.div`
  background: rgb(63, 34, 101);
  background: linear-gradient(
    180deg,
    rgba(63, 34, 101, 1) 0%,
    rgba(139, 47, 202, 1) 100%
  );
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255);
  width: 40%;
  /* border: 2px solid; */

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-basis: 40%;
  }

  h1 {
    font-family: "Audiowide", sans-serif;
    margin: 0;
  }

  h4 {
    font-weight: 100;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export default LeftStyle;
