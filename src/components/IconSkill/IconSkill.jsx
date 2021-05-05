import React from 'react';
import { makeStyles, Button, Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 200,
    width: 200,
    wordBreak: 'break-word',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.primary.light,
  },

  image: {
    height: 64,
    width: 64,
    backgroundSize: 'contain',
  },
}));

export default function IconSkill(props) {
  const classes = useStyles();
  const { icon, href, alt, name } = props;
  return (
    <Button className={classes.card} variant='outlined' href={href} target='_blank' component='a'>
      <CardMedia className={classes.image} image={icon} title={alt} />
      <Typography variant='button' component='p'>
        {name}
      </Typography>
    </Button>
  );
}
