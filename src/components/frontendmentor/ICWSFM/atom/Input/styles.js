import styled from "styled-components";
import IconError from "../../IconError";
export const Label = styled.label`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  position: relative;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  border: ${(props) =>
    props.isValid ? "1px solid hsla(249, 10%, 26%, 0.5)" : "1px solid red"};
  border-radius: 6px;
  background-color: white;

  &:focus-within {
    border: ${(props) =>
      props.isValid ? "2px solid hsla(249, 10%, 26%, 0.7)" : "1px solid red"};
  }
`;

export const InputStyled = styled.input`
  width: 90%;
  padding: 1.1em 15px;
  color: hsl(249, 10%, 26%);
  font-weight: 600;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const WrapperIconError = styled(IconError)`
  display: ${(props) => (props.isValid ? "none" : "block")};
  position: absolute;
  right: 20px;
  width: 24px;
  height: 24px;
`;

export const ErrorMessage = styled.p`
  display: ${(props) => (props.isValid ? "none" : "block")};
  color: ${(props) => (props.isValid ? "green" : "hsl(0, 100%, 74%)")};
  font-size: 13px;
  text-align: right;
  margin: -0.5em 0;
`;
