import React, { useState } from 'react';
import IconArrow from '@frontendmentorComponents/BACSM/IconArrow';
import IconError from '@frontendmentorComponents/BACSM/IconError';
import Logo from '@frontendmentorComponents/BACSM/Logo';
import Styles from '../../styles/pages/frontendmentor/BACSM.module.scss';
import heroMobile from '@frontendmentorAssets/BACSM/hero-mobile.jpg';
import heroDesktop from '@frontendmentorAssets/BACSM/hero-desktop.jpg';
import clsx from 'clsx';

const BaseApparelComingSoonMaster = () => {
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailRegex.exec(e.target[0].value) === null
      ? setInvalid(true)
      : setInvalid(false);
  };
  return (
    <main className={Styles.container}>
      <header className={Styles.header}>
        <Logo />
      </header>
      <picture className={Styles.picture}>
        <source media='(min-width: 1440px)' srcSet={heroDesktop} />
        <img src={heroMobile} alt='adversating' />
      </picture>
      <section className={Styles.section}>
        <h1>
          <span>We're</span> coming soon
        </h1>
        <p className={Styles.section_p}>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form
          onSubmit={handleSubmit}
          className={clsx(Styles.form, invalid && Styles.invalid)}
        >
          <input
            className={Styles.emailInput}
            type='text'
            placeholder='Email Address'
          />
          {invalid && (
            <IconError className={clsx(invalid && Styles.iconError)} />
          )}
          <button className={Styles.button}>
            {' '}
            <IconArrow />{' '}
          </button>
        </form>
        {invalid && (
          <p className={Styles.warning}>Please provide a valid email</p>
        )}
      </section>
    </main>
  );
};

export default BaseApparelComingSoonMaster;
