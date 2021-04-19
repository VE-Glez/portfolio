import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Hidden, IconButton, Slide, useScrollTrigger } from '@material-ui/core';
import { Menu, Search as SearchIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import AuxiliarBackButton from './AuxiliarBackButton';
import BackToTop from '../BackToTop';
import NavLinks from './NavLinks';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    //in={!trigger}
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function MyNavbar() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Typography variant='h6' component={Link} to='/'>
              Veglez
            </Typography>
            <span className={classes.grow}></span>
            <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
            <Hidden lgUp>
              <IconButton onClick={() => setIsOpen(!isOpen)}>
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar id={'back-to-top'} />
      <AuxiliarBackButton />
      <BackToTop anchorEl='back-to-top' />
    </>
  );
}
