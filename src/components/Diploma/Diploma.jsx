import React, { useState } from 'react';
import {
  IconButton,
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
  diploma: {
    height: 200,
  },
  diplomaDialog: {
    maxWidth: '100%',
  },
  dialogRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
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
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'flex-end',
    // backgroundColor: theme.palette.primary.light,
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
      >
        <DialogContent classes={{ root: classes.dialogRoot }} tabIndex='0'>
          <IconButton
            variant='contained'
            onClick={handleClose}
            className={classes.closeButton}
          >
            <Close />
          </IconButton>
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
