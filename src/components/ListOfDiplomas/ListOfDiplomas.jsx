import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import Diploma from '../Diploma/Diploma';
import data from './diplomas';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    gap: theme.spacing(2),
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
}));

const ListOfDiplomas = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data.map((item) => React.cloneElement(<Diploma itemN={item} />, { key: v4() }))}
    </div>
  );
};

export default ListOfDiplomas;
