import React from 'react';
import Styles from '../styles/pages/certifications.module.scss';
import { makeStyles, Grid, Typography, Box, Paper } from '@material-ui/core';
import ListOfDiplomas from '../components/ListOfDiplomas/ListOfDiplomas';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    wordBreak: 'break-word',
    justifyContent: 'center',
    margin: theme.spacing(4, 1),
    gap: theme.spacing(4),
  },
  code: {
    fontWeight: 700,
  },
}));

const Certifications = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12}>
        <Typography variant='h3' component='h2' align='center'>
          Desarrollo profesional
        </Typography>{' '}
      </Grid>
      <Grid item sm={12} md={10}>
        <Typography variant='body1'>
          {' '}
          En julio del 2020 decidí unirme a una comunidad dentro de <a>Platzi</a> la cual me ha ayudado a desarrollarme
          profesionalmente en el área de la tecnología, sin duda la filosofía de Platzi de "Nunca parar de aprender" me
          ha impulsado a continuar aprendiendo algo nuevo cada día.
        </Typography>
        <Typography>
          Junto con los cursos que ofrece la plataforma y la ayuda de la comunidad, he logrado avanzar constantemente en
          adquirir el conocimiento para el desarrollo web enfocado en frontend.
        </Typography>
        <Typography>
          La experiencia de programar con <span className={classes.code}>C</span> (programación imperativa) y{' '}
          <span className={classes.code}>Python</span> (programación orientada a objetos) en la universidad me facilita
          asimilar varios conceptos de javascript al ser un lenguaje multiparadigma.
        </Typography>
        <Typography>Desde que entré a Platzi hasta la fecha he cursado y aprobado los siguientes cursos:</Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <Paper elevation={10}>
          <ListOfDiplomas />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Certifications;
