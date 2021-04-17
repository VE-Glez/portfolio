import React, { useState } from 'react';
import Styles from '../../styles/pages/frontendmentor/HLPWCSM.module.scss';
import iconCommunities from '../../assets/frontendmentor/HLPWCSM/icon-communities.svg';
import iconMessages from '../../assets/frontendmentor/HLPWCSM/icon-messages.svg';
import iconEmail from '../../assets/frontendmentor/HLPWCSM/icon-email.svg';
import logo from '../../assets/frontendmentor/HLPWCSM/logo.svg';
import screenMockups from '../../assets/frontendmentor/HLPWCSM/screen-mockups.svg';
import illustrationFlowingConversation from '../../assets/frontendmentor/HLPWCSM/illustration-flowing-conversation.svg';
import iconPhone from '../../assets/frontendmentor/HLPWCSM/icon-phone.svg';
import illustrationGrowTogether from '../../assets/frontendmentor/HLPWCSM/illustration-grow-together.svg';
import illustrationYourUsers from '../../assets/frontendmentor/HLPWCSM/illustration-your-users.svg';
import ButtonPrimary from '../../components/HLPWCSM/ButtonPrimary';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import Logo from '../../components/HLPWCSM/Logo';

const HuddleLandingPageWithCurvedSectionsMaster = () => {
  const [isValid, setIsValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setIsValid(true);
      console.log('Formulario enviado');
    }
  };
  const handleInvalid = (w) => {
    w.preventDefault();
    setIsValid(false);
    console.log('ES INVALIDO');
  };

  return (
    <main className={Styles.container}>
      <section className={Styles.wrapper}>
        <header className={Styles.header}>
          <picture>
            <img src={logo} alt='logo' />
          </picture>
          <button>Try it free</button>
        </header>
        <div className={Styles.hero}>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <ButtonPrimary />
          <picture>
            <img src={screenMockups} alt='screen mockups' />
          </picture>
        </div>
        <section className={Styles.section1}>
          <article className={Styles.art1}>
            <img src={iconCommunities} alt='comunities icon' />
            <h2> 1.4k+</h2>
            <p>Communities Formed </p>
          </article>

          <article className={Styles.art2}>
            <img src={iconMessages} alt='messages icon' />
            <h2>2.7m+</h2>
            <p>Messages Sent</p>
          </article>
        </section>
        <section className={Styles.section2}>
          <article>
            <img src={illustrationGrowTogether} alt='' />
            <header>
              <h2>Grow Together</h2>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </header>
          </article>
          <article>
            <img src={illustrationFlowingConversation} alt='' />
            <header>
              <h2>Flowing Conversations</h2>
              <p>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </header>
          </article>
          <article>
            <img src={illustrationYourUsers} alt='' />
            <header>
              <h2>Your Users</h2>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </header>
          </article>
        </section>
        <section className={Styles.section3}>
          <article>
            <h2>Ready To Build Your Community?</h2>
            <ButtonPrimary />
          </article>
          <footer>
            <article className={Styles.first_footer_article}>
              <header>
                <h3>Newsletter</h3>{' '}
                <p>
                  To recieve tips on how to grow your community, sign up to our
                  weekly newsletter. We’ll never send you spam or pass on your
                  email address
                </p>
              </header>
              <form onSubmit={handleSubmit}>
                <label>
                  <input type='email' onInvalid={handleInvalid} />
                  {!isValid && (
                    <p className={Styles.errormsg}>Check your email please</p>
                  )}
                </label>
                <button>Subscribe</button>
              </form>
            </article>
            <article className={Styles.seconds_footer_article}>
              <Logo className={Styles.logoEnd} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
              </p>
              <address>
                <div>
                  <img src={iconPhone} alt='icon phone' />
                  <a href='tel:+15431234567'>Phone: +1-543-123-4567</a>
                </div>
                <div>
                  <img src={iconEmail} alt='icon email' />
                  <a href='mailto:example@hunddle.com'>example@huddle.com</a>
                </div>
              </address>
              <div className={Styles.icons}>
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitterSquare />
              </div>
            </article>
          </footer>
        </section>
      </section>
    </main>
  );
};

export default HuddleLandingPageWithCurvedSectionsMaster;
