import React from 'react';
import Styles from '../../styles/pages/frontendmentor/BLPM.module.scss';
import iconArrowLight from '../../assets/frontendmentor/BLPM/icon-arrow-light.svg';
import illustrationLaptopDesktop from '../../assets/frontendmentor/BLPM/illustration-laptop-desktop.svg';

import illustrationPhones from '../../assets/frontendmentor/BLPM/illustration-phones.svg';
import logo from '../../assets/frontendmentor/BLPM/logo.svg';
import iconArrowDark from '../../assets/frontendmentor/BLPM/icon-arrow-dark.svg';
import illustrationEditorDesktop from '../../assets/frontendmentor/BLPM/illustration-editor-desktop.svg';
import illustrationLaptopMobile from '../../assets/frontendmentor/BLPM/illustration-laptop-mobile.svg';
import illustrationEditorMobile from '../../assets/frontendmentor/BLPM/illustration-editor-mobile.svg';
import NavigationBar from '../../components/BLPM/organism/NavigationBar';

const BlogrLandingPageMain = () => {
  const info = [
    {
      title: 'Products',
      items: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
    },
    {
      title: 'Company',
      items: ['About', 'Team', 'Blog', 'Careers'],
    },
    {
      title: 'Connect',
      items: ['Contact', 'Newsletter', 'LinkedIn'],
    },
  ];
  const icons = [iconArrowDark, iconArrowLight];
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <NavigationBar
          // className={Styles.menu}
          logo={logo}
          info={info}
          iconsList={icons}
        />

        <article className={Styles.article1Header}>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>

          <button>Start for Free</button>
          <button>Learn More</button>
        </article>
      </header>

      <section className={Styles.section1}>
        <h2 className={Styles.section1__title}>Designed for the future</h2>
        <picture className={Styles.section1__picture}>
          <source
            media='(min-width: 1440px)'
            srcSet={illustrationEditorDesktop}
          />
          <img src={illustrationEditorMobile} alt='illustration editor' />
        </picture>
        <article className={Styles.article1S1}>
          <h3 className={Styles.article1S1__title}>
            Introducing an extensible editor
          </h3>
          <p className={Styles.article1S1__description}>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </article>
        <article className={Styles.article2S1}>
          <h3 className={Styles.article2S1__title}>
            Robust content management
          </h3>
          <p className={Styles.article2S1__description}>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </article>
      </section>

      <section className={Styles.section2}>
        <picture className={Styles.section2__picture}>
          <img src={illustrationPhones} alt='illustration phones' />
        </picture>
        <article className={Styles.article1S2}>
          <h3 className={Styles.article1S2__title}>
            State of the Art Infrastructure
          </h3>
          <p className={Styles.article1S2__description}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </article>
      </section>

      <section className={Styles.section3}>
        <picture className={Styles.section3__picture}>
          <source media='(min-width: 1440px)' src={illustrationLaptopDesktop} />
          <img src={illustrationLaptopMobile} alt='illustration laptop' />
        </picture>
        <article className={Styles.article1S3}>
          <h3 className={Styles.article1S3__title}>Free, open, simple</h3>
          <p className={Styles.article1S3__description}>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </article>
        <article className={Styles.article2S3}>
          <h3 className={Styles.article2S3__title}>Powerful tooling</h3>
          <p className={Styles.article2S3__description}>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </article>
      </section>

      <footer className={Styles.footer}>
        <picture className={Styles.footer__picture}>
          <img src={logo} alt='Blogr logo' />
        </picture>
        <ul className={Styles.listProducts}>
          <li>
            <a href='#'>Product</a>
          </li>{' '}
          <li>
            <a href='#'>Overview</a>
          </li>{' '}
          <li>
            <a href='#'>Pricing</a>
          </li>{' '}
          <li>
            <a href='#'>Marketplace</a>
          </li>{' '}
          <li>
            <a href='#'>Features</a>
          </li>{' '}
          <li>
            <a href='#'>Integrations</a>
          </li>
        </ul>
        <ul className={Styles.listCompany}>
          <li>
            <a href='#'>Company</a>
          </li>{' '}
          <li>
            <a href='#'>About</a>
          </li>{' '}
          <li>
            <a href='#'>Team</a>
          </li>{' '}
          <li>
            <a href='#'>Blog</a>
          </li>{' '}
          <li>
            <a href='#'>Careers</a>
          </li>
        </ul>
        <ul className={Styles.listConnect}>
          <li>
            <a href='#'>Connect</a>
          </li>{' '}
          <li>
            <a href='#'>Contact</a>
          </li>{' '}
          <li>
            <a href='#'>Newsletter</a>
          </li>{' '}
          <li>
            <a href='#'>LinkedIn</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default BlogrLandingPageMain;
