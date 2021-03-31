import React from "react";
import webpack from "../../public/diplomas/diploma-webpack.png";
import Styles from "../styles/pages/certifications.module.scss";
const Certifications = () => {
  return (
    <div>
      <h1> Estas son mis certificaciones</h1>
      <img className={Styles.diploma} src={webpack} alt="Diploma webpack" />
    </div>
  );
};

export default Certifications;
