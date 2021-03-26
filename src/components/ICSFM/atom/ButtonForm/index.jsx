import React from "react";
import { StyledButtonForm } from "./styles";
const ButtonForm = ({ bgColor, className, borderBottomColor }) => {
  return (
    <StyledButtonForm
      className={className}
      bgColor={bgColor}
      borderBottomColor={borderBottomColor}
    >
      Claim your free trial
    </StyledButtonForm>
  );
};

export default ButtonForm;
