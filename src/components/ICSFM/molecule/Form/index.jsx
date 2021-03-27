import React from "react";
import ButtonForm from "../../atom/ButtonForm";
import Input from "../../atom/Input";
import { StyledForm, Msg } from "./styles";

const Form = ({ className }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm className={className} onSubmit={handleSubmit}>
      <Input placeholder="First Name" name="FirstName" />
      <Input placeholder="Last Name" name="LastName" />
      <Input placeholder="Email Address" name="Email" type="email" />
      <Input placeholder="Password" name="Password" type="password" />
      <ButtonForm
        bgColor="hsl(154, 59%, 51%)"
        borderBottomColor="hsl(154, 59%, 51%)"
      />
      <Msg>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </Msg>
    </StyledForm>
  );
};

export default Form;
