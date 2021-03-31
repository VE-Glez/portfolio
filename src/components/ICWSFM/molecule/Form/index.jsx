import React from "react";
import ButtonForm from "../../atom/ButtonForm";
import Input from "../../atom/Input";
import { StyledForm, Msg } from "./styles";

const Form = ({ className }) => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <StyledForm onSubmit={handleSubmit} className={className}>
      <Input placeholder="First Name" name="FirstName" />
      <Input placeholder="Last Name" name="LastName" />
      <Input placeholder="Email Address" name="Email" type="email" />
      <Input placeholder="Password" name="Password" type="password" />
      <ButtonForm />
      <Msg>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </Msg>
    </StyledForm>
  );
};

export default Form;
