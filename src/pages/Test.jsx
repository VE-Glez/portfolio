import React from "react";
import ButtonPrice from "../components/ICSFM/atom/ButtonPrice";
import Input from "../components/ICSFM/atom/Input";
import Form from "../components/ICSFM/molecule/Form";

const Test = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: "20px",
        backgroundColor: "rgba(50,200,100,0.4)",
      }}
    >
      <Input />

      <Form />
      <ButtonPrice />
    </div>
  );
};

export default Test;
