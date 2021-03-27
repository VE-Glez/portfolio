import React, { useState } from "react";
import { Label, InputStyled, ErrorMessage, WrapperIconError } from "./styles";

const Input = ({ type = "text", placeholder = "First Name", name }) => {
  let customRegex, short, autocompleteType;
  const [invalid, setInvalid] = useState(false);

  switch (type) {
    case "email":
      customRegex = "[\\w\\.-]+@[\\w-]+\\.[\\w-]{2,4}";
      autocompleteType = "username";
      break;
    case "password":
      customRegex = "[\\w]+";
      short = 6;
      autocompleteType = "current-password";
      break;
    case "tel":
      customRegex = "[0-9]{10}";
    default:
      customRegex = "[\\w]+";
      break;
  }

  const handleChange = (e) => {
    // e.target.setCustomValidity("");
    //setCustom debe estar siempre en blanco para evitar always false en caso de querer uno personalizado
    e.target.checkValidity() ? setInvalid(false) : setInvalid(true);
    // e.target.reportValidity();
  };

  const handleInvalid = (e) => {
    //evita el pop up personalizado de mensaje de error, asi se puede implementar uno propio con css
    e.preventDefault();
  };

  return (
    <>
      <Label isValid={!invalid}>
        <InputStyled
          required
          autoComplete={autocompleteType}
          type={type}
          min={short}
          placeholder={placeholder}
          onChange={handleChange}
          onInvalid={handleInvalid}
          pattern={customRegex}
        />
        <WrapperIconError isValid={!invalid} />
      </Label>
      <ErrorMessage isValid={!invalid}>
        {placeholder == "Email Address"
          ? `Looks that this is not an email`
          : `${placeholder} cannot be empty`}
      </ErrorMessage>
    </>
  );
};

export default Input;
