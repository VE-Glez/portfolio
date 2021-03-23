import "../../styles/pages/frontendmentor/article-pcm.scss";
import avatar from "../../../public/frontendmentor/article-preview-component-master/avatar-michelle.jpg";
import hero from "../../../public/frontendmentor/article-preview-component-master/drawers.jpg";
import shareButton from "../../../public/frontendmentor/article-preview-component-master/icon-share.svg";
import facebook from "../../../public/frontendmentor/article-preview-component-master/icon-facebook.svg";
import twitter from "../../../public/frontendmentor/article-preview-component-master/icon-twitter.svg";
import pinterest from "../../../public/frontendmentor/article-preview-component-master/icon-pinterest.svg";
import React, { useState } from "react";
const ArticlePreviewComponentMaster = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="container">
      <div className="card">
        <picture className="card__hero">
          <img src={hero} alt="desktop" className="card__image" />
        </picture>
        <article className="card__body">
          <h2 className="card__title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="card__description">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room fell complete.
          </p>
        </article>
        <section className="moreInfo">
          <article className={`author ${click && "authorHidden"}`}>
            <div className="author__image_container">
              <img src={avatar} alt="michelle" className="author__image" />
            </div>
            <div className="author__data">
              <h2 className="author__name">Michelle Appleton</h2>
              <h3 className="author__publication_date">28 Jun 2020</h3>
            </div>
            <button
              className="author__shareButtonContainer"
              onClick={() => setClick(!click)}
            >
              <img
                src={shareButton}
                alt="share button"
                className="author__shareButton"
              />
            </button>
          </article>
          <article className={`icons ${click && "displayShare"}`}>
            <div className="icons__word">SHARE</div>
            <div className="icons__container">
              <img src={facebook} alt="share on facebook" />
              <img src={twitter} alt="share on twitter" />
              <img src={pinterest} alt="share on pinterest" />
            </div>
            <button
              className="author__shareButtonContainer"
              onClick={() => setClick(!click)}
            >
              <img
                src={shareButton}
                alt="share button"
                className="author__shareButton"
              />
            </button>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ArticlePreviewComponentMaster;
