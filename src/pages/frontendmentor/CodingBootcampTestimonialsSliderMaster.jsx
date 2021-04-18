import React, { useState } from 'react';
import Styles from '../../styles/pages/frontendmentor/CBTSM.module.scss';
import IconNext from '../../components/CBTSM/IconNext';
import IconPrev from '../../components/CBTSM/IconPrev';
import data from '../../assets/frontendmentor/CBTSM/data';

const CodingBootcampTestimonialsSliderMaster = () => {
  const datos = data.results;
  const size = datos.length;
  const [index, setIndex] = useState(0);

  return (
    <div className={Styles.container}>
      <section className={Styles.testimonials}>
        <article className={Styles.testimonial}>
          <picture>
            <img src={datos[index].image} alt={datos[index].img_alt} />
            <div className={Styles.buttons}>
              <button onClick={() => (index - 1 < 0 ? setIndex(size - 1) : setIndex(index - 1))}>
                <IconPrev />
              </button>
              <button onClick={() => (index + 1 >= size ? setIndex(0) : setIndex(index + 1))}>
                <IconNext />
              </button>
            </div>
          </picture>
          <header className={Styles.testimonial__info}>
            <p className={Styles.testimonial__quote}>{datos[index].quote}</p>
            <div className={Styles.testimonial__hgroup}>
              <h2 className={Styles.testimonial__name}>{datos[index].name}</h2>
              <h3 className={Styles.testimonial__jobTitle}>{datos[index].job_title}</h3>
            </div>
          </header>
        </article>
      </section>
    </div>
  );
};

export default CodingBootcampTestimonialsSliderMaster;
