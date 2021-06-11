import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { Add, Facebook, GitHub, MoreVertRounded } from '@material-ui/icons';
import React, { useState } from 'react';
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card elevation={5} className={classes.card}>
        <CardHeader
          classes={{ root: classes.header }}
          // action={
          //   <IconButton onClick={handleOpen}>
          //     <MoreVertRounded />
          //   </IconButton>
          // }
          title={title}
          subheader={
            <Typography>{subtitle}</Typography>
            // <Box>
            //   <IconButton>
            //     <Add />
            //   </IconButton>
            //   <IconButton>
            //     <GitHub />
            //   </IconButton>
            //   <IconButton>
            //     <Facebook />
            //   </IconButton>
            // </Box>
          }
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
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transitionDuration={1000}
        //anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>Get suscribe</MenuItem>
        <MenuItem onClick={handleClose}>Shoud be more options?</MenuItem>
      </Menu>
    </>
  );
};

export default ProjectCard;
