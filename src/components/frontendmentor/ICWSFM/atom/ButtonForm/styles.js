import styled from "styled-components";

export const StyledButtonForm = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: hsl(154, 59%, 51%);
  border: 1px solid hsl(154, 59%, 45%);
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid hsl(154, 59%, 45%);
  overflow: hidden;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: opacity(0.65);
  }
`;
