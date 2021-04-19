import React from 'react';
import { makeStyles, Button, Card, CardMedia, CardContent, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    width: '100%',
    minWidth: 75,
    height: 75,
    backgroundSize: 'auto',
  },
  card: {
    maxWidth: 275,
    boxShadow: [theme.shadows[3]],
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      filter: 'sepia(0.6)',
    },
  },
  tech: {
    minWidth: '50%',
    flexGrow: 1,
    justifySelf: 'flex-end',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      minWidth: '60%',
    },
  },
}));

export default function IconSkill(props) {
  const classes = useStyles();
  const { icon, href, alt, name } = props;
  return (
    <Button className={classes.card} href={href} target='_blank' component='a'>
      <Box className={classes.tech}>
        <CardMedia className={classes.imageWrapper} image={icon} title={alt} />
        <Typography variant='button' component='p'>
          {name}
        </Typography>
      </Box>
      <Typography variant='body2'>Visit official website</Typography>
      {/* <CardContent></CardContent> */}
    </Button>
  );
}
