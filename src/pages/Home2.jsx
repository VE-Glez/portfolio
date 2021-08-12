import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import styles from '../styles/pages/home2.module.scss';
import me from '@assets/mee.jpg';
import PrincipleCard from '../components/PrincipleCard';
import principles from '../data/principles';
import { cardsInfo } from '../data/cards';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import TextCloud from '../components/TextCloud';
import BackToTop from '../components/BackToTop';

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

      <section className={styles.technologies}>
        <h2 id='technologies'>Tecnologías</h2>
        <div className={styles.technologies__content}>
          <p>
            Desde hace 4 años he estado metido en el mundo de la
            programación principalmente usando python para automatizar
            tareas repetitivas en mi dia a día, matlab como herramienta de
            análisis número para simulaciones con modelos tridimensionales.{' '}
          </p>
          <br />
          <p>
            Actualmente he estado enfocado en las tecnologías web y me
            estoy especializando en frontend, principalmente con el uso de
            javascript usando react como librería principal y NextJS como
            framework.
          </p>{' '}
          <br />
          <p>
            Estas son las tecnologías que puedo utilizar hasta el momento:{' '}
          </p>
        </div>
        <TextCloud />
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
