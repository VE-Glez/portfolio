import styled from "styled-components";

export const PriceButton = styled.button`
  width: 100%;
  background-color: hsl(248, 32%, 49%);
  height: 70px;
  padding: 0 18%;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  box-shadow: 0 5px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: hsl(248, 32%, 55%);
  }

  span {
    font-weight: 600;
  }
`;
