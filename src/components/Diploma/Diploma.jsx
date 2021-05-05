import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paperWidthFalse: {
    maxWidth: 'calc(100% - 64px)',
  },
  paper: {
    margin: theme.spacing(0, 'auto'),
  },
  diploma: {
    height: 200,
  },
  diplomaDialog: {
    maxWidth: '100%',
  },
  card: {
    wordBreak: 'break-word',
    width: 260,
    '&:hover': {
      transition: `transform 0.5s ease, box-shadow 0.5s ease`,
      boxShadow: [theme.shadows[4]],
      transform: `translateY(-15px)`,
    },

    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  content: {
    minHeight: 90,
  },
  closeButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function Diploma({ itemN }) {
  const [openDialog, setopenModal] = useState(false);
  const handleClose = () => setopenModal(false);
  const handleClick = () => setopenModal(true);
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} variant='elevation' onClick={handleClick}>
        <CardMedia
          className={classes.diploma}
          image={itemN.diploma}
          alt={`Diploma ${itemN.title}`}
        />
        <CardContent className={classes.content}>
          <Typography variant='button'>Diploma {itemN.title}</Typography>
        </CardContent>
      </Card>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        scroll='body'
        maxWidth={false}
        classes={{
          paperWidthFalse: classes.paperWidthFalse,
          paper: classes.paper,
        }}
      >
        <DialogContent tabIndex='0'>
          <Button
            variant='contained'
            onClick={handleClose}
            className={classes.closeButton}
          >
            <Close />
          </Button>
          <img
            className={classes.diplomaDialog}
            src={itemN.diploma}
            alt={`Diploma ${itemN.title}`}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
