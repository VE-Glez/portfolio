import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import socialNetworks from './links';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id='contact-me'>
      <p>Contáctame</p>
      <div className={styles.icons}>
        {socialNetworks.map((item) => (
          <a key={item.href} target='_blank' href={item.href}>
            <IconButton style={item.styles}>
              {React.createElement(item.icon, { style: item.styles })}
            </IconButton>
            <span
              style={item.styles}
              className={styles.icon__after}
            ></span>
          </a>
        ))}
      </div>
      <p>&#169; Todos los derechos reservados. 2021</p>
    </footer>
  );
};

export default Footer;
