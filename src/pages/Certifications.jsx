import React, { useState } from 'react';
import Styles from '../styles/pages/certifications.module.scss';
import ecma from '../assets/diplomas-pdf/diploma-ecmascript-6.pdf';
import webpack from '../assets/diplomas-images/diploma-webpack_converted_0.png';
import ecmascript from '../assets/diplomas-images/diploma-ecmascript-6_converted_0.png';
import {
  Button,
  DialogContent,
  Dialog,
  makeStyles,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';

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
  const [openDialog, setopenModal] = useState(false);
  const handleClose = () => setopenModal(false);
  const handleClick = () => setopenModal(true);
  const classes = useStyles();

  const handleKey = (e) => console.log(e);
  return (
    <Grid container xs={12} fluid style={{ wordBreak: 'break-word' }}>
      <Box>
        <Typography variant='h1'> Estas son mis certificaciones</Typography>
      </Box>
      <Grid item column sm={12} md={6}>
        <Box>
          <Button onClick={handleClick}>
            <img
              className={Styles.diploma}
              src={webpack}
              alt='Diploma webpack'
            />
          </Button>
          <Typography variant='body2'>Click image</Typography>
        </Box>
        <Dialog
          open={openDialog}
          onClose={handleClose}
          scroll='paper'
          maxWidth={false}
          classes={{
            paperWidthFalse: classes.paperWidthFalse,
            paper: classes.paper,
          }}
        >
          <DialogContent onKeyPress={handleKey} tabIndex='0'>
            <img
              className={Styles.diplomaDialog}
              src={webpack}
              alt='Diploma webpack'
            />
          </DialogContent>
        </Dialog>
      </Grid>
      <Grid item sm={12} md={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardmedia}
            image={ecmascript}
            title='diploma png de ecma 6'
          ></CardMedia>
          <CardActions>
            <Button variant='contained' color='secondary'>
              <a href={ecma} target='_blank'>
                check diploma ecma
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Certifications;
