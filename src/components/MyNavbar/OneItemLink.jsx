import React, { useEffect, useState } from 'react';
import { Box, Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(4),
      background: theme.palette.grey[200],
    },
  },
  boxItemWrapper: {
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '& .MuiListItem-button': {
        borderBlockEnd: `1px solid ${theme.palette.grey[500]}`,
      },
    },
  },
  collapse: {
    marginBlockStart: theme.spacing(1),
    background: theme.palette.primary.light,
    boxShadow: [theme.shadows[8]],
    position: 'absolute',
    top: '100%',
    right: 0,
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      boxShadow: 'none',
      background: theme.palette.background.paper,
      marginBlockStart: theme.spacing(0),
    },
  },
}));

const body = document.querySelector('body');

const OneItemLink = ({ itemN, openDrawer }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');
  const anchor = document.getElementById(target);
  //anchor siempre guarda el ultimo valor, después de dar click a algun item de inner list, éste debería también cambiar su target a cero para que pueda volver a scrolear
  //porque el scroll solo es posible durante el "componentShouldUpdate" y solo se cumple cuando target ha cambiado
  useEffect(() => {
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setOpen(false);
      openDrawer(false);
    }
    return setTarget('');
  }, [target]);

  const handleInnerListClick = (event) => {
    body.style = {};
    setTarget(event.currentTarget.dataset.targetid);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    body.style = {};
    body.scrollIntoView(true);
    openDrawer(false);
  };

  const handleBlur = () => {
    setTimeout(() => setOpen(false), 150);
  };

  return (
    <Box className={classes.boxItemWrapper}>
      <>
        <ListItem button component={Link} to={itemN.route} onClick={!itemN.nested ? handleClose : null}>
          <ListItemIcon>{React.createElement(itemN.icon)}</ListItemIcon>
          <ListItemText primary={itemN.label} />
          {itemN.nested && (
            <IconButton onClick={handleClick} onBlur={handleBlur}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </ListItem>
        {itemN.nested && open && (
          <Collapse className={classes.collapse} in={open} timeout='auto' unmountOnExit>
            <List disablePadding>
              {itemN.nested.map((item) => {
                return React.cloneElement(
                  <ListItem
                    className={classes.nested}
                    button
                    data-targetid={item.targetId}
                    onClick={handleInnerListClick}
                  >
                    <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>,
                  { key: item.label }
                );
              })}
            </List>
          </Collapse>
        )}
      </>
    </Box>
  );
};

export default React.memo(OneItemLink);
