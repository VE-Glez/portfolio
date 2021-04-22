import React, { useEffect, useState } from 'react';
import { Box, Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { v4 } from 'uuid';
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

const OneItemLink = ({ itemN, openDrawer }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');

  useEffect(() => {
    console.log(`cambiando target a: ${target}`);
    try {
      const anchor = document.getElementById(target);
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      anchor.focus();
      openDrawer(false);
    } catch (error) {
      console.log(error.message);
    }
    setOpen(false);
  }, [target]);

  const handleInnerListClick = (event) => {
    document.querySelector('body').style = {};
    setTarget(event.currentTarget.dataset.targetid);
  };
  const simplehandleClick = () => {
    setOpen(!open);
  };
  const complexhandleClick = () => {
    setOpen(!open);
  };

  const handleBlur = () => {
    setTimeout(() => setOpen(false), 150);
  };

  return (
    <Box className={classes.boxItemWrapper}>
      <>
        <ListItem button component={Link} to={itemN.route}>
          <ListItemIcon>{React.createElement(itemN.icon)}</ListItemIcon>
          <ListItemText primary={itemN.label} />
          {itemN.nested && (
            <IconButton onClick={itemN.nested ? complexhandleClick : simplehandleClick} onBlur={handleBlur}>
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
                  { key: v4() }
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
