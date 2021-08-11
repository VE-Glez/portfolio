import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import styles from './styles.module.scss';
import listofitems from './menuData';
import OneItem from './OneItem';
import { useState } from 'react';
import Footer from '@components/Footer/Footer';
import { useEffect } from 'react';
import clsx from 'clsx';

const MyNavbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? document.body.classList.add('menu_active')
      : document.body.classList.remove('menu_active');
  }, [open]);

  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.appbar}>
        <div
          id='wrapper'
          className={clsx(styles.wrapper, open && styles.wrapper__open)}
        >
          <nav className={styles.navbar}>
            {listofitems.map((item) => (
              <OneItem
                key={item.label}
                {...item}
                handleClose={() => setOpen(false)}
              />
            ))}
          </nav>
          <Footer />
        </div>
        <span onClick={handleClick} className={styles.icon__burguer}>
          {open ? <CgClose /> : <GiHamburgerMenu />}
        </span>
      </div>
    </>
  );
};

export default MyNavbar;
