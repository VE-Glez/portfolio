import React, { useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { CgArrowUpO } from 'react-icons/cg';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';

export default function BackToTop() {
  const backToTopRef = useRef(null);

  useEffect(() => {
    if (backToTopRef) {
      const toggleClass = (e) => {
        if (window.pageYOffset > 580) {
          backToTopRef.current.classList.add(styles.scrolling);
        } else {
          backToTopRef.current.classList.remove(styles.scrolling);
        }
      };
      document.addEventListener('scroll', toggleClass);

      return () => document.removeEventListener('scroll', toggleClass);
    }
  }, [backToTopRef]);

  return ReactDOM.createPortal(
    <HashLink
      ref={backToTopRef}
      className={styles.container}
      to={'#top'}
      smooth
    >
      <CgArrowUpO />
    </HashLink>,
    document.body
  );
}
