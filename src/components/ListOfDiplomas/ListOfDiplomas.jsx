import { makeStyles } from '@material-ui/core';
import React from 'react';
import Diploma from '../Diploma/Diploma';
import data from './diplomas';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    gap: theme.spacing(2),
    padding: theme.spacing(4, 1),
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(4),
    },
  },
}));

const ListOfDiplomas = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {data.map((item) =>
        React.cloneElement(<Diploma itemN={item} />, { key: item.title })
      )}
    </div>
  );
};

export default ListOfDiplomas;
