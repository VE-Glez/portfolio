import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Styles from '../styles/pages/projects.module.scss';
import { cardsInfo } from '../data/cards';

const Projects = () => {
  return (
    <main className={Styles.container}>
      {cardsInfo.map((card) => {
        let { id, ...rest } = card;
        return <ProjectCard key={id} {...rest} />;
      })}
    </main>
  );
};

export default Projects;
