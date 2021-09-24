import styled from "styled-components";

const Button = styled.button`
  background: rgb(63, 34, 101);
  background: linear-gradient(
    90deg,
    rgba(63, 34, 101, 1) 0%,
    rgba(139, 47, 202, 1) 100%
  );
  border: none;
  border-radius: 5px;
  font: inherit;
  font-size: 0.8rem;
  width: auto;
  color: #ffff;
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: background 2s;

  &:hover {
    background: rgb(63, 34, 101);
    background: linear-gradient(
      360deg,
      rgba(63, 34, 101, 1) 0%,
      rgba(139, 47, 202, 1) 100%
    );
  }
`;

export default Button;
