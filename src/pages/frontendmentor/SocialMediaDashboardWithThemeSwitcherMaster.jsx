import React from 'react';
import Styles from '../../styles/pages/frontendmentor/SMDWTSM.module.scss';
import iconYoutube from '../../assets/frontendmentor/SMDWTSM/icon-youtube.svg';
import iconDown from '../../assets/frontendmentor/SMDWTSM/icon-down.svg';
import iconInstagram from '../../assets/frontendmentor/SMDWTSM/icon-instagram.svg';
import iconUp from '../../assets/frontendmentor/SMDWTSM/icon-up.svg';
import iconFacebook from '../../assets/frontendmentor/SMDWTSM/icon-facebook.svg';
import iconTwitter from '../../assets/frontendmentor/SMDWTSM/icon-twitter.svg';

const SocialMediaDashboardWithThemeSwitcherMaster = () => {
  return (
    <div className={Styles.container}>
      <h1> Estas en la página SocialMediaDashboardWithThemeSwitcherMaster </h1>
      <section>
        Social Media Dashboard
        <p>Total Followers: 23,004</p>
        <p>Dark Mode</p>
        <div>@nathanf 1987 Followers 12 Today</div>
        <div>@nathanf 1044 Followers 99 Today</div>
        <div>@realnathanf 11k Followers 1099 Today</div>
        <div>Nathan F. 8239 Subscribers 144 Today</div>
        <p>Overview - Today</p>
        <div>Page Views 87 3</div>
      </section>
    </div>
  );
};

export default SocialMediaDashboardWithThemeSwitcherMaster;
