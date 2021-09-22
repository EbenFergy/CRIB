import styled from "styled-components";

const AppStyle = styled.div`
  margin: 0;
  padding: 0;
  /* width: 100vw; */
  height: 100vh;
  display: flex;

  img {
    /* opacity: 0.2; */
    transition: width 1s;
    width: 2rem;
  }

  .bigLogo {
    position: absolute;
    top: -5rem;
    width: 10rem;
    opacity: 0.1;
  }
`;

export default AppStyle;
