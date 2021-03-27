import React from "react";
import ButtonPrice from "../../components/ICSFM/atom/ButtonPrice";
import Form from "../../components/ICSFM/molecule/Form";
import Styles from "../../styles/pages/frontendmentor/ICSFM.module.scss";
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
