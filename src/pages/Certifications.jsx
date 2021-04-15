import React from 'react';
import webpack from '../../public/diplomas/diploma-webpack.png';
import Styles from '../styles/pages/certifications.module.scss';
import ecma from '../assets/diplomas/diploma-ecmascript-6.pdf';
const Certifications = () => {
  return (
    <div>
      <h1> Estas son mis certificaciones</h1>
      <img className={Styles.diploma} src={webpack} alt='Diploma webpack' />
      <a href={ecma} target='_blank'>
        check diploma ecma
      </a>
    </div>
  );
};

export default Certifications;
