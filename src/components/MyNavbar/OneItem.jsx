import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import styles from './styles.module.scss';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
import { scrollIntoView } from '../../utils/scrollView';
//componente recursivo

const OneItem = ({ href, label, icon, nested, handleClose, inner }) => {
  const [openInner, setOpenInner] = useState(false);

  const handleClick = () => {
    setOpenInner(!openInner);
  };

  const handleBlur = () => {
    setTimeout(() => setOpenInner(false), 240);
  };

  return (
    <div className={clsx(styles.link__container)}>
      <div className={styles.link}>
        {inner ? (
          <HashLink
            className={styles.link__label}
            onClick={(_) => handleClose(_, true)}
            to={href}
            scroll={scrollIntoView}
            smooth
          >
            {icon && <span>{React.createElement(icon)}</span>}
            <span>{label}</span>
          </HashLink>
        ) : (
          <Link
            className={styles.link__label}
            onClick={handleClose}
            to={href}
          >
            {icon && <span>{React.createElement(icon)}</span>}
            <span>{label}</span>
          </Link>
        )}
        {nested && (
          <button
            onBlur={handleBlur}
            className={styles.link__button}
            onClick={handleClick}
          >
            {openInner ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        )}
      </div>
      {nested && (
        <ul
          style={{ '--size': nested.length }}
          className={clsx(
            styles.innerList,
            openInner && styles.innerList__active
          )}
        >
          {nested.map((item) => (
            <OneItem
              inner
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              handleClose={handleClose}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default OneItem;
