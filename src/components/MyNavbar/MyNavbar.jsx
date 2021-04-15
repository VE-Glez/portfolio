import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Hidden,
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import { Menu, Search as SearchIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './TemporalDrawer';
import listofitems from './menuData';
import { useStyles } from './styles';
import AuxiliarBackButton from './AuxiliarBackButton';
import BackToTop from '../BackToTop';
import NavigationLinks from './NavigationLinks';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function SearchForm() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
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
            <Hidden mdDown>
              <NavigationLinks
                setIsOpen={setIsOpen}
                device='desktop'
                dense={true}
                disableGutters={true}
              />
            </Hidden>
            <SearchForm />
            <Hidden lgUp>
              <IconButton onClick={() => setIsOpen(true)}>
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar id={'back-to-top'} />
      <AuxiliarBackButton />
      <BackToTop anchorEl='back-to-top' />

      <TemporaryDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
