import React from 'react';
import listofitems from './menuData';
import { v4 } from 'uuid';
import { Drawer, Hidden, List, makeStyles } from '@material-ui/core';
import OneItemLink from './OneItemLink';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    backgroundColor: 'inherit',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },

    '& .MuiListItemIcon-root': {
      minWidth: 30,
      color: '#fff',
      [theme.breakpoints.down('md')]: {
        color: 'black',
      },
    },
  },
}));

const NavLinks = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setTimeout(setIsOpen(false), 100);
  };

  return (
    <>
      <Hidden lgUp>
        <Drawer anchor='left' open={isOpen} onClose={handleClose}>
          <List component='nav' className={classes.root}>
            {listofitems.map((item) =>
              React.cloneElement(<OneItemLink openDrawer={setIsOpen} itemN={item} />, { key: v4() })
            )}
          </List>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <List component='nav' className={classes.root}>
          {listofitems.map((item) =>
            React.cloneElement(<OneItemLink openDrawer={setIsOpen} itemN={item} />, { key: v4() })
          )}
        </List>
      </Hidden>
    </>
  );
};

export default NavLinks;
