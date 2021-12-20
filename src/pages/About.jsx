import React from 'react';
import tesis from '@assets/tesis.pdf';
import styles from '../styles/pages/about.module.scss';
import Diploma from '../components/Diploma/Diploma';
import microna from '@assets/microna.webp';

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Acerca de mí</h2>
        <p>
          Nací el 14 de Octubre de 1994, actualmente resido en el puerto de
          Veracruz, en México. Estudié ingeniería mecatrónica porque desde
          pequeño me ha llamado la atención la tecnología, me fascina lo
          que puede lograrse con las máquinas, sin duda son una forma de
          mejorar la calidad de vida; durante mis estudios universitarios,
          la Dra. Andrea Guadalupe Martínez López me dio la oportunidad de
          participar en cursos que se llevaron a cabo en el departamento de
          investigación en micro y nanotecnología (MICRONA) la cual se
          encontraba en la facultad en la que estudiaba, ahi pude asimilar
          el ambiente en el mundo de la investigación, realmente fue una
          experiencia muy grata. Fue donde aprendí mas a profundidad sobre
          electrónica, específicamente sobre física de semiconductores.
        </p>
      </header>
      <Diploma
        itemN={{
          diploma: microna,
          title: 'introduccón a la física de semiconductores',
        }}
      />
      <div className={styles.programming}>
        <p>
          Fui avanzando en mis estudios universitarios y llegué al mundo de
          la programación en python e introducción a la inteligencia
          artificial; en mi primer año había tomado cursos en programación
          en C pero fue python el que me atrajo al mundo de la
          programación, me emocionó la abstracción de ese lenguaje de alto
          nivel que permitía realizar proyectos de reconocimiento facial o
          árboles de decisiones de forma muy sencilla. Actualmente utilizo
          python para realizar actividades como optimizaciones imagenes,
          creación de hojas de cálculo, manipulación de archivos; si veo
          que hay alguna actividad que pueda acortarse u optimizarse con un
          script en python, lo hago; las máquinas están para evitar que
          realicemos de manera repetitiva nuestras actividades.
        </p>
      </div>

      <div className={styles.tesis}>
        <p>
          El mundo de la ingeniería en general, la ciencia y principalmente
          la tecnología siempre me ha fascinado así en que la recta final
          de mis estudios, llegada la hora de hacer mi tesis el Dr. Rogelio
          de Jesús López Portillo me orientó en el tema de mi tesis:
          "Simulación de robot de rehabilitación con controlador de
          impedancia variable". Mi enfoque principal fue a la programación,
          se basa principalmente en controlar la impedancia de un robot de
          rehabilitación para extremidades superiores a través de un
          algoritmo de decisión binaria llamado{' '}
          <span className={styles.accent}>Win-stay Lose-Switch.</span>
        </p>
        <p>
          Emula el comportamiento del humano cuando se enfrenta a una tarea
          de decisión forzada entre 2 decisiones.{' '}
        </p>
        <a href={tesis} className={styles.tesis__button}>
          Puedes leer mi tesis aquí
        </a>
      </div>
      <section className={styles.achivements}>
        <h2>Logros</h2>
        <p>
          En el transcurso de mi vida he destacado en varios momentos, me
          gusta destacar y me emociona competir:
        </p>
        <ul>
          <li>Primeros lugares en natación en 2° primaria</li>
          <li>
            Fui capitán de mi equipo de basquetbol en 4° y 5° de primaria
          </li>
          <li>Fui capitán de mi equipo de voleibol 4° y 5° de primaria</li>
          <li>
            Toqué en un orquesta en el auditorio Benito Juarez del puerto
            como tecladista
          </li>
          <li>
            Ganador de olimpiadas de matemáticas y física ambas en primer
            lugar en el bachillerato
          </li>
          <li>
            Primer lugar en olimpiada de matemáticas a nivel sección
            escolar
          </li>
          <li>Mención en el cuadro de honor en el bachillerato</li>
        </ul>
      </section>

      <section className={styles.interest}>
        <h2>Intereses</h2>
        <p>
          En general todo lo que tiene que ver con tecnología me llama
          mucho la atención, pero claro hay muchas otras actividades y
          temas que me fascinan.
        </p>
        <ul className={styles.outer}>
          <li className={styles.summary}>
            <details>
              <summary>
                Me gusta las películas de ciencia ficción, tecnología,
                fantasía:
              </summary>
              <ul>
                <li>Chappie</li>
                <li>Pacific Rim</li>
                <li>Real Steel</li>
                <li>Inception</li>
                <li>The cabin in the woods</li>
              </ul>
            </details>
          </li>
          <li>Me llama mucho la atención el tema de la onironancia</li>
          <li>Tengo interés por la inteligencia artificial</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
