import styled from "styled-components";

export const Button = styled.button`
  background-color: hsl(322, 100%, 66%);
  border-radius: 1.5em;
  border: none;
  color: white;
  padding: 1em 2.25em;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: hsl(321, 100%, 78%);
  }
`;
