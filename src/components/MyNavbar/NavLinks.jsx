import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Drawer, Hidden, IconButton, List, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import clsx from 'clsx';
import listofitems from './menuData';
import OneItemLink from './OneItemLink';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    maxWidth: 500,
    display: 'flex',
    backgroundColor: 'inherit',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      borderInlineEnd: `1px solid ${theme.palette.grey[300]}`,
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper,
      color: 'black',
      paddingBlockStart: 0,
    },

    '& .MuiListItemIcon-root': {
      minWidth: 30,
      color: '#fff',
      [theme.breakpoints.down('md')]: {
        color: 'black',
      },
    },
  },
  drawer: {
    color: theme.palette.text.primary,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'absolute',
    zIndex: 4000,
    top: 0,
    left: '-100vw',
    transition: 'left 0.35s ease',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      position: 'initial',
      height: 'auto',
      width: 'auto',
    },
  },
  visible: {
    transition: 'left 0.35s ease',
    left: 0,
  },
  drawerAfter: {
    flexGrow: 1,
    background: 'rgba(0,0,0,0.65)',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

const NavLinks = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    const body = document.querySelector('body');
    if (!isOpen) {
      body.style.overflow = 'hidden';
      body.style.paddingInlineEnd = '15px';
    } else {
      body.style = {};
    }
  };

  return (
    <>
      <div className={clsx(classes.drawer, isOpen && classes.visible)}>
        <List component='nav' className={classes.root}>
          {listofitems.map((item) =>
            React.cloneElement(<OneItemLink openDrawer={setIsOpen} itemN={item} />, { key: v4() })
          )}
        </List>
        <div className={classes.drawerAfter} onClick={handleClick}></div>
      </div>
      <Hidden lgUp>
        <IconButton onClick={handleClick}>
          <Menu />
        </IconButton>
      </Hidden>
    </>
  );
};

export default NavLinks;
