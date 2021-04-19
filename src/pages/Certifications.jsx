import React from 'react';
import Styles from '../styles/pages/certifications.module.scss';
import ecma from '../assets/diplomas-pdf/diploma-ecmascript-6.pdf';
import ecmascript from '../assets/diplomas-images/diploma-ecmascript-6_converted_0.png';
import { Button, makeStyles, Card, CardActions, CardMedia, Grid, Typography, Box } from '@material-ui/core';
import ListOfDiplomas from '../components/ListOfDiplomas/ListOfDiplomas';

const useStyles = makeStyles((theme) => ({
  paperWidthFalse: {
    maxWidth: 'calc(100% - 20px)',
  },
  paper: {
    margin: theme.spacing(0, 'auto'),
  },
  cardmedia: {
    height: 180,
  },
  card: {
    maxWidth: 300,
  },
}));

const Certifications = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center' style={{ wordBreak: 'break-word' }}>
      <Box>
        <Typography variant='h1'> Estas son mis certificaciones</Typography>
      </Box>
      <ListOfDiplomas />
      <Grid item sm={12} md={6}></Grid>
      {/* <Grid item sm={12} md={6}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardmedia} image={ecmascript} title='diploma png de ecma 6'></CardMedia>
          <CardActions>
            <Button variant='contained' color='secondary'>
              <a href={ecma} target='_blank'>
                check diploma ecma
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default Certifications;
