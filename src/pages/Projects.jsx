import React from "react";
import TitlebarGridList from "../components/TitlebarGridList";
import Styles from "../styles/pages/projects.module.scss";
const Projects = () => {
  return (
    <div>
      <main className={Styles.container}></main>
      <TitlebarGridList />
    </div>
  );
};

export default Projects;
