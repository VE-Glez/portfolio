import p5 from 'p5';
import React, { useEffect, useRef } from 'react';
import sketch from './sketch';
import styles from './styles.module.scss';

const Cylindrical = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    if (wrapper) {
      new p5((s) => sketch(s, wrapper.current), wrapper.current);
    }
  }, [wrapper]);

  return (
    <div id='canvas_text' ref={wrapper} className={styles.wrapper}></div>
  );
};

export default Cylindrical;
