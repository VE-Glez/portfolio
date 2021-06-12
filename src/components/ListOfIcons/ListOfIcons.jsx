import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import IconSkill from '../IconSkill/IconSkill';
import data from './cardsInfo';

const useStyles = makeStyles((theme) => ({
  iconsWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(4),
    padding: theme.spacing(2, 0),
    justifyContent: 'center',
  },
}));

export default function ListOfIcons() {
  const classes = useStyles();
  return (
    <Box className={classes.iconsWrapper}>
      {data.map((item) =>
        React.cloneElement(<IconSkill {...item} />, { key: item.name })
      )}
    </Box>
  );
}
