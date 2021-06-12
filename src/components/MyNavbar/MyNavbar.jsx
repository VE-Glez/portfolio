import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Slide, useScrollTrigger } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import BackToTop from '../BackToTop';
import NavLinks from './NavLinks';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    //in={!trigger}
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function MyNavbar() {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Typography variant='h6' component={Link} to='/'>
              Veglez
            </Typography>
            <span className={classes.grow}></span>
            <NavLinks />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar id={'back-to-top'} />
      <BackToTop anchorEl='back-to-top' />
    </>
  );
}
