import React from "react";
import { StyledButtonForm } from "./styles";
const ButtonForm = ({ className }) => {
  return (
    <StyledButtonForm className={className} type="submit">
      Claim your free trial
    </StyledButtonForm>
  );
};

export default ButtonForm;
