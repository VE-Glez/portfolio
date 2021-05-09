import React, { useState } from 'react';
import clsx from 'clsx';
import Styles from '../../styles/pages/frontendmentor/PCSPM.module.scss';
import Logo from '@frontendmentorComponents/PCSPM/Logo';
import dashboard from '@frontendmentorAssets/PCSPM/illustration-dashboard.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const PingComingSoonPageMaster = () => {
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleClick = (e) => {
    const result = e.target.form[0].value.match(emailRegex);
    console.log(`el resultado es ${result}`);
    if (!result) {
      console.log('no es valido');
      setIsValid(false);
    } else {
      console.log('es valido');
      setIsValid(true);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={Styles.container}>
      <Logo className={Styles.logo} />
      <header className={Styles.header}>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p className={Styles.headerMessage}>Subscribe and get notified</p>
        <form
          action='#'
          className={Styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              type='text'
              placeholder='Your email adress...'
              onInput={handleInput}
              value={input}
              className={clsx(!isValid && Styles.invalid, Styles.emailInput)}
            />
            {!isValid && (
              <p className={Styles.errorMessage}>
                Please provided valid email address
              </p>
            )}
          </div>
          <button type='button' onClick={handleClick}>
            Notify Me
          </button>
        </form>
      </header>
      <div>
        <img
          className={Styles.illustration}
          src={dashboard}
          alt='dashboard image'
        />
      </div>
      <footer className={Styles.footer}>
        <div className={Styles.icons}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>© Copyright Ping. All rights reserved 2021</p>
      </footer>
    </div>
  );
};

export default PingComingSoonPageMaster;
