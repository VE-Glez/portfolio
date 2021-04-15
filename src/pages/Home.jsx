import React, { useState } from 'react';
import { Typography, Container } from '@material-ui/core';
import BackToTop from '../components/BackToTop';

const Home = () => {
  return (
    <>
      <Container>
        <Typography>This is home main content</Typography>
      </Container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (
        <Typography variant='h2' key={el}>
          Regna terrae, cantate Deo, psallite Domino qui fertis super caelum
          caeli ad Orientem Ecce dabit voci Suae vocem virtutis, tribuite
          virtutem Deo. Exorcizamus te, omnis immundus spiritus omnis satanica
          potestas, omnis incursio infernalis adversarii, omnis legio, omnis
          congregatio et secta diabolica. Ergo draco maledicte et omnis legio
          diabolica adjuramus te. cessa decipere humanas creaturas, eisque
          aeternae Perditionis venenum propinare. Vade, Satana, inventor et
          magister omnis fallaciae, hostis humanae salutis. Humiliare sub
          potenti manu dei, contremisce et effuge, invocato a nobis sancto et
          terribili nomine, quem inferi tremunt. Ab insidiis diaboli, libera
          nos, Domine. Ut Ecclesiam tuam secura tibi facias libertate servire,
          te rogamus, audi nos. Ut inimicos sanctae Ecclesiae humiliare
          digneris, te rogamus, audi nos. Ut inimicos sanctae Ecclesiae te
          rogamus, audi nos. Terribilis Deus de sanctuario suo. Deus Israhel
          ipse truderit virtutem et fortitudinem plebi Suae. Benedictus Deus.
          Gloria Patri. English Translation: Kingdoms of the Earth, sing unto
          God, Praises to the Lord that carry above the sky of heaven to the
          East. Behold, He sends forth His Own Voice, the Voice of Virtue.
          Attribute the Virtue to God. We exorcise you, every impure spirit,
          every satanic power, every incursion of the infernal adversary, every
          legion, every congregation and diabolical sect. Thus, cursed demon and
          every diabolical legion, we adjure you. Cease to deceive human
          creatures, and to give to them the Poison of Eternal Perdition. Go
          away, Satan, inventor and master of all deceit, enemy of humanity's
          salvation. Be humble under the Powerful Hand of God -- tremble and
          flee -- I invoke by us the Sacred and Terrible Name at which those
          down below tremble. From the snares of the devil, free us, Lord. So
          that You may make Your Church safe to serve You freely we ask You,
          hear us. So that You may destroy the enemies of Your Sacred Church, we
          ask You, hear us! That ... the enemies of Your Sacred Church we ask
          You, hear us! God is frightening about His Own sacred place. The God
          of Israel Himself will have thrust excellence and strength to His Own
          people. Blessed be God. Glory be to the Father.
        </Typography>
      ))}
      <h1 id='technologies'>
        <strong>Technologies</strong>
      </h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <Typography variant='h2' key={el * 12}>
          Regna terrae, cantate Deo, psallite Domino qui fertis super caelum
          caeli ad Orientem Ecce dabit voci Suae vocem virtutis, tribuite
          virtutem Deo. Exorcizamus te, omnis immundus spiritus omnis satanica
          potestas, omnis incursio infernalis adversarii, omnis legio, omnis
          congregatio et secta diabolica. Ergo draco maledicte et omnis legio
          diabolica adjuramus te. cessa decipere humanas creaturas, eisque
          aeternae Perditionis venenum propinare. Vade, Satana, inventor et
          magister omnis fallaciae, hostis humanae salutis. Humiliare sub
          potenti manu dei, contremisce et effuge, invocato a nobis sancto et
          terribili nomine, quem inferi tremunt. Ab insidiis diaboli, libera
          nos, Domine. Ut Ecclesiam tuam secura tibi facias libertate servire,
          te rogamus, audi nos. Ut inimicos sanctae Ecclesiae humiliare
          digneris, te rogamus, audi nos. Ut inimicos sanctae Ecclesiae te
          rogamus, audi nos. Terribilis Deus de sanctuario suo. Deus Israhel
          ipse truderit virtutem et fortitudinem plebi Suae. Benedictus Deus.
          Gloria Patri. English Translation: Kingdoms of the Earth, sing unto
          God, Praises to the Lord that carry above the sky of heaven to the
          East. Behold, He sends forth His Own Voice, the Voice of Virtue.
          Attribute the Virtue to God. We exorcise you, every impure spirit,
          every satanic power, every incursion of the infernal adversary, every
          legion, every congregation and diabolical sect. Thus, cursed demon and
          every diabolical legion, we adjure you. Cease to deceive human
          creatures, and to give to them the Poison of Eternal Perdition. Go
          away, Satan, inventor and master of all deceit, enemy of humanity's
          salvation. Be humble under the Powerful Hand of God -- tremble and
          flee -- I invoke by us the Sacred and Terrible Name at which those
          down below tremble. From the snares of the devil, free us, Lord. So
          that You may make Your Church safe to serve You freely we ask You,
          hear us. So that You may destroy the enemies of Your Sacred Church, we
          ask You, hear us! That ... the enemies of Your Sacred Church we ask
          You, hear us! God is frightening about His Own sacred place. The God
          of Israel Himself will have thrust excellence and strength to His Own
          people. Blessed be God. Glory be to the Father.
        </Typography>
      ))}
      <h1 id='about-me'>
        <strong>About me</strong>
      </h1>
      {/* <BackToTop /> */}
    </>
  );
};
export default Home;
