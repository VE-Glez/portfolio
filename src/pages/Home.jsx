import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  CardMedia,
} from '@material-ui/core';
import Styles from '../styles/pages/home.module.scss';
import robotic from '../assets/images/free-robot.jpg';
import IA from '../assets/images/artificial-intelligence.png';
import adn from '../assets/images/adn2.jpg';

const Home = () => {
  return (
    <>
      <Grid container xl justify='center' style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Typography variant='h2' component='h1'>
            <strong>
              Valentín Eduardo <br />
              González Morales
            </strong>
          </Typography>
          <Typography variant='h6' component='p'>
            Te doy la bienvenida a mi página web
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography variant='h2' id='about-me'>
            <strong>Sobre mí</strong>
          </Typography>
          <Typography align='justify'>
            Soy ingeniero en mecatrónica con pasión por la automatización.
            Considero que el uso de la tecnología es el medio por el cual
            podremos tener un mejor estilo de vida por ello es importante para
            mi desarrollar tecnologías que puedan servirnos en nuestras
            actividades cotidianas.
          </Typography>
          <Typography align='justify'>
            Cada vez que debo realizar una tarea a computadora, siempre
            considero la opción de automatizar parte de la tarea con un script,
            y si el coste{' '}
            <code>tiempo-creación-script &lt;&lt; tarea asignada</code> entonces
            genero un script normamente en python por lo cómodo, sencillo y
            práctico que resulta ese lenguaje.
          </Typography>
          Una de mis metas es desarrollar tecnología que nos lleve al siguiente
          nivel en la regeneración celular.
          <Typography>
            Existen 3 campo principales en los que tengo interés:
          </Typography>
          <List>
            <ListItem>
              <ListItemText>Robótica</ListItemText>
              <CardMedia>
                <picture>
                  <img
                    className={Styles.image}
                    src={robotic}
                    alt='robot picture'
                  />
                </picture>
              </CardMedia>
            </ListItem>
            <ListItem>
              <ListItemText>Inteligencia artificial</ListItemText>
              <picture>
                <img
                  className={Styles.image}
                  src={IA}
                  alt='artificial intelligence'
                />
              </picture>
            </ListItem>
            <ListItem>
              <ListItemText>Genética</ListItemText>
              <picture>
                <img className={Styles.image} src={adn} alt='adn image' />
              </picture>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant='h2' id='technologies'>
            <strong>Technologies</strong>
          </Typography>
        </Grid>
      </Grid>
      {/* <BackToTop /> */}
    </>
  );
};
export default Home;
