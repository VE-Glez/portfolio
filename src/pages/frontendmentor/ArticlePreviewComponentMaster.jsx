import Styles from '../../styles/pages/frontendmentor/APCM.module.scss';
import avatar from '@frontendmentorAssets/APCM/avatar-michelle.jpg';
import hero from '@frontendmentorAssets/APCM/drawers.jpg';
import IconShare from '@frontendmentorComponents/APCM/IconShare';
import IconFacebook from '@frontendmentorComponents/APCM/IconFacebook';
import IconTwitter from '@frontendmentorComponents/APCM/IconTwitter';
import IconPinterest from '@frontendmentorComponents/APCM/IconPinterest';
import clsx from 'clsx';
import React, { useState } from 'react';
const ArticlePreviewComponentMaster = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <picture className={Styles.card__hero}>
          <img src={hero} alt='desktop' className={Styles.card__image} />
        </picture>
        <article className={Styles.card__body}>
          <h2 className={Styles.card__title}>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className={Styles.card__description}>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room fell complete.
          </p>
        </article>
        <section className={Styles.moreInfo}>
          <article className={Styles.author}>
            <div className={Styles.author__image_container}>
              <img
                src={avatar}
                alt='michelle'
                className={Styles.author__image}
              />
            </div>
            <div className={Styles.author__data}>
              <h2 className={Styles.author__name}>Michelle Appleton</h2>
              <h3 className={Styles.author__publication_date}>28 Jun 2020</h3>
            </div>
            <button
              className={clsx(
                Styles.author__IconShareContainer,
                click && Styles.buttonChangeColor
              )}
              onClick={() => setClick(!click)}
            >
              <IconShare className={Styles.author__IconShare} />
            </button>
          </article>
          <article className={clsx(Styles.icons, click && Styles.showIcons)}>
            <div className={Styles.icons__word}>SHARE</div>
            <div className={Styles.icons__container}>
              <IconFacebook className={Styles.icons_IconFacebook} />
              <IconTwitter className={Styles.icons_IconTwitter} />
              <IconPinterest className={Styles.icons_IconPinterest} />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ArticlePreviewComponentMaster;
