import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import styles from '../styles/pages/home2.module.scss';
import me from '@assets/mee.jpg';
import PrincipleCard from '../components/PrincipleCard';
import principles from '../data/principles';
import { cardsInfo } from '../data/cards';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Home2 = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          loading='lazy'
          src={me}
          className={styles.header__image}
          alt='my photo'
        />
        <div className={styles.header__text}>
          <p>Hola, mi nombre es</p>
          <h1>Valentín Eduardo González Morales</h1>

          <AnimatedText />
        </div>
      </header>

      <section className={styles.programming_principles}>
        <h2 id='programmingPrinciples'>Principios de programación</h2>
        <div className={styles.principles__container}>
          {principles.map((p) => (
            <PrincipleCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section>
        <h2 id='technologies'>Tecnologías</h2>
      </section>

      <section className={styles.projects}>
        <h2 id='projects' className={styles.projects__title}>
          Proyectos personales
        </h2>
        <div className={styles.projects__container}>
          {cardsInfo.map((card) => {
            let { id, ...rest } = card;
            return <ProjectCard key={id} {...rest} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home2;
