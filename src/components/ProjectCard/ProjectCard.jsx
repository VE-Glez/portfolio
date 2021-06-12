import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { projectCardStyles } from './projectCardStyles';

const ProjectCard = ({
  title,
  subtitle,
  image,
  description,
  linkRepo,
  linkOnline,
}) => {
  const classes = projectCardStyles();

  return (
    <>
      <Card elevation={5} className={classes.card}>
        <CardHeader
          classes={{ root: classes.header }}
          title={title}
          subheader={<Typography>{subtitle}</Typography>}
        />
        <CardMedia image={image} style={{ height: 200 }} />
        <CardContent classes={{ root: classes.content }}>
          {description}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            classes={{ label: classes.label }}
            component='a'
            target='_blank'
            href={linkOnline}
            variant='contained'
            color='primary'
          >
            Ver projecto
          </Button>
          <Button
            classes={{ label: classes.label }}
            component='a'
            target='_blank'
            href={linkRepo}
            variant='outlined'
            color='primary'
          >
            Mirar el código
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
