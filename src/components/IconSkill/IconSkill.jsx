import React from 'react';
import {
  makeStyles,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    width: '100%',
    height: 64,
    backgroundSize: 'auto',
  },
}));

export default function IconSkill(props) {
  const classes = useStyles();
  const { src, href, alt } = props;
  return (
    <Card>
      <Button href={href} target='_blank' component='a'>
        <CardMedia className={classes.imageWrapper} image={src} title={alt} />
        <CardContent>
          <Typography variant='text2'>Visit official website</Typography>
        </CardContent>
      </Button>
    </Card>
  );
}
