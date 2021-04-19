import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, makeStyles, Typography } from '@material-ui/core';
import webpack from '@diplomas/diploma-webpack_converted_0.png';

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
  diploma: {
    maxWidth: 250,
    marginBlockEnd: theme.spacing(2),
  },
  diplomaDialog: {
    maxWidth: 800,
  },
  diplomaContainer: {
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

export default function Diploma({ itemN }) {
  const [openDialog, setopenModal] = useState(false);
  const handleClose = () => setopenModal(false);
  const handleClick = () => setopenModal(true);
  const classes = useStyles();

  return (
    <>
      <Box>
        <Button variant='outlined' className={classes.diplomaContainer} onClick={handleClick}>
          <img className={classes.diploma} src={itemN.diploma} alt={`Diploma ${itemN.courseName}`} />
          <Typography variant='body2' color='textPrimary'>
            Diploma {itemN.courseName}
          </Typography>
        </Button>
      </Box>
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
          <img className={classes.diplomaDialog} src={itemN.diploma} alt={`Diploma ${itemN.courseName}`} />
        </DialogContent>
      </Dialog>
    </>
  );
}
