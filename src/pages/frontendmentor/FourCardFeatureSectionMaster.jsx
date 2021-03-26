import React from "react";
import Styles from "../../styles/pages/frontendmentor/FCFSM.module.scss";
import Supervisor from "../../components/FCFSM/IconSupervisor";
import TeamBuilder from "../../components/FCFSM/IconTeamBuilder";
import Karma from "../../components/FCFSM/IconKarma";
import Calculator from "../../components/FCFSM/IconCalculator";
const FourCardFeatureSectionMaster = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.container}>
        <header className={Styles.header}>
          <h1>Reliable, efficient delivery</h1>
          <h2>Powered by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <section className={Styles.articles}>
          <article className={Styles.supervisor}>
            <h3>Supervisor</h3>
            <p>Monitors activity to identify project roadblocks</p>
            <Supervisor />
          </article>
          <article className={Styles.teamBuilder}>
            <h3>Team Builder</h3>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
            <TeamBuilder />
          </article>
          <article className={Styles.karma}>
            <h3>Karma</h3>
            <p>Regularly evaluates our talent to ensure quality</p>
            <Karma />
          </article>
          <article className={Styles.calculator}>
            <h3>Calculator</h3>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
            <Calculator />
          </article>
        </section>
      </section>
    </main>
  );
};

export default FourCardFeatureSectionMaster;
