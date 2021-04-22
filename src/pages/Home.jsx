import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  makeStyles,
  Box,
  Button,
  Divider,
} from '@material-ui/core';
import Styles from '../styles/pages/home.module.scss';
import robotic from '../assets/images/free-robot.jpg';
import IA from '../assets/images/artificial-intelligence.png';
import adn from '../assets/images/adn2.jpg';
import me from '../assets/images/myAvatar.jpeg';
import tesis from '../assets/tesis.pdf';
import cv from '../assets/veglez_CV.pdf';
import ListOfIcons from '../components/ListOfIcons/ListOfIcons';

const useStyles = makeStyles((theme) => ({
  container: { wordBreak: 'break-word', textAlign: 'justify', padding: 45 },
  listItem: {
    flexDirection: 'column',
    display: 'flex',
    border: `1px solid ${theme.palette.grey[500]}`,
  },
  header: {
    background: theme.palette.background.paper,
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
  },
  imageContainer: {
    height: 300,
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    transform: 'translateY(-17%)',
  },
  buttons: {
    display: 'flex',
    gap: theme.spacing(4),
    marginBlockStart: 45,
  },
  contrastText: {
    '& *': {
      color: 'white',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify='center' className={classes.container}>
        <Grid container justify='center' className={classes.header} component='header'>
          <Grid item xs={12} sm={10} md={4}>
            <picture className={classes.imageContainer}>
              <img src={me} alt='my photo' className={classes.imagen} />
            </picture>
          </Grid>
          <Grid item xs={12} sm={10} md={4}>
            <Typography variant='h3' component='h1'>
              <strong>
                Valentín Eduardo <br />
                González Morales
              </strong>
            </Typography>
            <Typography variant='h6' component='p'>
              Te doy la bienvenida a mi página web
            </Typography>
            <Box className={classes.buttons}>
              <Button
                style={{ wordBreak: 'normal' }}
                className={classes.contrastText}
                color='primary'
                variant='contained'
                href={cv}
                component='a'
                target='_blank'
              >
                {' '}
                Download CV
              </Button>
              <Button color={'primary'} variant='outlined' component={'a'} href={tesis} target='_blank'>
                {' '}
                Read tesis
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Divider />
          <Typography variant='h4' component='h2' id='about-me'>
            <strong>Sobre mí</strong>
          </Typography>
          <Typography>
            Soy ingeniero en mecatrónica con pasión por la automatización. Considero que el uso de la tecnología es el
            medio por el cual podremos tener un mejor estilo de vida por ello es importante para mi desarrollar
            tecnologías que puedan servirnos en nuestras actividades cotidianas.
          </Typography>
          <Typography>
            Cada vez que debo realizar una tarea a computadora, siempre considero la opción de automatizar parte de la
            tarea con un script, y si el coste <code>tiempo-creación-script &lt;&lt; tarea asignada</code> entonces
            genero un script normamente en python por lo cómodo, sencillo y práctico que resulta ese lenguaje.
          </Typography>
          <Typography variant='body1'>
            Una de mis metas es desarrollar tecnología que nos lleve al siguiente nivel en la regeneración celular.
          </Typography>
          <Typography>Existen 3 campo principales en los que tengo interés:</Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText>Robótica</ListItemText>
              <CardMedia>
                <picture>
                  <img className={Styles.imagen} src={robotic} alt='robot picture' />
                </picture>
              </CardMedia>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Inteligencia artificial</ListItemText>
              <picture>
                <img className={Styles.imagen} src={IA} alt='artificial intelligence' />
              </picture>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText>Genética</ListItemText>
              <picture>
                <img className={Styles.imagen} src={adn} alt='adn image' />
              </picture>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant='h4' component='h2' id='technologies'>
            <strong>Technologies</strong>
          </Typography>
          <ListOfIcons />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
