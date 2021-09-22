import styled from "styled-components";

const AppStyle = styled.div`
  margin: 0;
  padding: 0;
  /* width: 100vw; */
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

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
    transition: all 1s ease-in;
  }

  .bigLogo:hover {
    transform: translate(200px, 100px) rotate(160deg) scale(0.5);
  }

  .smallLogo {
    transition: all ease-in 1s;
  }

  .smallLogo:hover {
    transform: rotate(360deg);
  }
`;

export default AppStyle;
