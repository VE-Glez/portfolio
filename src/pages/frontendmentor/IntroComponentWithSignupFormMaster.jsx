import React from "react";
import ButtonPrice from "../../components/ICWSFM/atom/ButtonPrice";
import Form from "../../components/ICWSFM/molecule/Form";
import Styles from "../../styles/pages/frontendmentor/ICWSFM.module.scss";
const IntroComponentWithSignupFormMaster = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.main}>
        <header className={Styles.header}>
          <h1>Learn to code by watching others</h1>{" "}
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </header>
        <div className={Styles.body}>
          <ButtonPrice />
          <Form />
        </div>
      </section>
    </main>
  );
};

export default IntroComponentWithSignupFormMaster;
