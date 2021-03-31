import React from "react";
import Styles from "../../styles/pages/frontendmentor/HLPWCSM.module.scss";
import IconMessages from "../../components/HLPWCSM/IconMessages";
import IconEmail from "../../components/HLPWCSM/IconEmail";
import Logo from "../../components/HLPWCSM/Logo";
import ScreenMockups from "../../components/HLPWCSM/ScreenMockups";
import IconCommunities from "../../components/HLPWCSM/IconCommunities";
import IllustrationFlowingConversation from "../../components/HLPWCSM/IllustrationFlowingConversation";
import IconPhone from "../../components/HLPWCSM/IconPhone";
import IllustrationGrowTogether from "../../components/HLPWCSM/IllustrationGrowTogether";
import IllustrationYourUsers from "../../components/HLPWCSM/IllustrationYourUsers";
import ButtonPrimary from "../../components/HLPWCSM/ButtonPrimary";

const HuddleLandingPageWithCurvedSectionsMaster = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.wrapper}>
        <div className={Styles.nav}>
          <Logo className={Styles.Logo} />
          <button>Try it free</button>
        </div>
        <header className={Styles.header}>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <ButtonPrimary />
        </header>
        <section className={Styles.mainContent}>
          <ScreenMockups />

          <article className={Styles.art1}>
            <IconCommunities />
            <h2> 1.4k+</h2>
            <p>Communities Formed </p>
          </article>

          <article className={Styles.art2}>
            <IconMessages />
            <h2>2.7m+</h2>
            <p>Messages Sent</p>
          </article>

          <p>
            Grow Together Generate meaningful discussions with your audience and
            build a strong, loyal community. Think of the insightful
            conversations you miss out on with a feedback form. Flowing
            Conversations You wouldn't paginate a conversation in real life, so
            why do it online? Our threads have just-in-time loading for a more
            natural flow. Your Users It takes no time at all to integrate Huddle
            with your app's authentication solution. This means, once signed in
            to your app, your users can start chatting immediately. Ready To
            Build Your Community? Get Started For Free Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit
            lacinia vestibulum a, ultrices quis sem. Phone: +1-543-123-4567
            example@huddle.com Newsletter To recieve tips on how to grow your
            community, sign up to our weekly newsletter. We’ll never send you
            spam or pass on your email address Subscribe
          </p>
        </section>
      </section>
    </main>
  );
};

export default HuddleLandingPageWithCurvedSectionsMaster;
