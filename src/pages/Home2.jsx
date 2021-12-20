import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import styles from '../styles/pages/home2.module.scss';
// import me from '@assets/mee.jpg';
import PrincipleCard from '../components/PrincipleCard';
import principles from '../data/principles';
import { cardsInfo } from '../data/cards';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import TextCloud from '../components/TextCloud';

const Home2 = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span aria-label='mi foto' className={styles.header__image}></span>
        <p>Hola, mi nombre es</p>
        <h1>Valentín Eduardo González Morales</h1>
        <AnimatedText />
      </header>
      <div className={styles.mainContent}>
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
              tareas repetitivas en mi dia a día. He usado matlab como
              herramienta de análisis número para simulaciones con modelos
              tridimensionales.{' '}
            </p>
            <br />
            <p>
              Actualmente he estado enfocado en las tecnologías web y me
              estoy especializando en frontend, principalmente con el uso
              de javascript usando react como librería principal y NextJS
              como framework.
            </p>{' '}
            <br />
          </div>

          <div id='cloudContainer'>
            <p>
              Estas son las tecnologías que puedo utilizar hasta el
              momento:{' '}
            </p>
            <TextCloud />
          </div>
        </section>

        <section className={styles.profesionalDevelopment}>
          <h2 id='profesionalDevelopment' className={styles.pro}>
            Desarrollo profesional
          </h2>
          <p>
            En julio del 2020 decidí unirme a una comunidad dentro de{' '}
            <a>Platzi</a> la cual me ha ayudado a desarrollarme
            profesionalmente en el área de la tecnología, aunque no fue
            hasta inicio de este año en el que le dediqué toda mi atención
            a la plataforma; sin duda la filosofía de Platzi de
            &ldquo;Nunca parar de aprender&rdquo; me ha impulsado a
            continuar aprendiendo algo nuevo cada día.
          </p>
          <p>
            Junto con los cursos que ofrece la plataforma y la ayuda de la
            comunidad, he logrado avanzar constantemente en adquirir el
            conocimiento para el desarrollo web full-stack con javascript.
          </p>
          <p>
            La experiencia de programar con <code>C</code> y{' '}
            <code>Python</code> en la universidad me ha facilitado asimilar
            varios conceptos de javascript al ser un lenguaje
            multiparadigma.
          </p>
          <p>
            Mi interés principal es{' '}
            <b>ciencia de datos e inteligencia artificial</b> pero ingresé
            al mundo de desarrollo web al conocer Django y al encontrarme
            con dificultades para desarrollar la interfaz me enfoqué en el
            frontend y al empezar a usar javascript empecé a usarlo también
            para el backend. Ahora uso Typescript para mis proyecto. Pero
            sin duda, python sigue siendo mi lenguaje favorito, en especial
            porque es el lenguaje perfecto para desarrollar inteligencia
            artificial.
          </p>
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
    </div>
  );
};

export default Home2;
