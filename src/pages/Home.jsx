import React from "react";
import GeneralNavbar from "../components/GeneralNavbar";
import Styles from "../styles/pages/home.module.scss";
import clsx from "clsx";
import IconError from "../components/BACSM/IconError";
const Home = () => {
  return (
    <main className={Styles.container}>
      <h1>This is home</h1>

      <div className={Styles.test1}></div>
      <IconError className={Styles.inhome} />
    </main>
  );
};
export default Home;
