import React from 'react';
import styles from './styles.module.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

// usually children gonna be navbar

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2}>
        <Link to='/'>
          <Logo />
          <span>VEGLEZ</span>
        </Link>
      </h2>
      {children}
    </header>
  );
};

export default Header;
