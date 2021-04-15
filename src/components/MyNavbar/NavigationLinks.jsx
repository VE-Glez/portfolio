import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import listofitems from './menuData';
import { useStyles } from './styles';

export default function NavigationLinks({
  device,
  dense,
  disableGutters,
  setIsOpen,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [innerOpen, setInnerOpen] = useState(false);
  const handleClick = (event) => {
    const promesa = new Promise((resolve, reject) => {
      resolve(() => history.push('/'));
      return;
    });

    promesa.then(() => {
      const targetID = event.target.dataset.src;
      const anchor = document.getElementById(targetID);
      console.log(anchor);
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setInnerOpen(false);
      setIsOpen(false);
      return anchor;
    });
  };

  const elements = () =>
    listofitems.map((item) => {
      return !item.nested ? (
        //si la lista no tiene elementos anidados
        <ListItem
          key={item.label}
          button
          component={Link}
          to={item.route}
          onClick={() => setIsOpen(false)}
          divider={device == 'mobile' ? true : false}
          disableGutters={disableGutters}
          dense={dense}
          className={
            device === 'mobile' ? classes.listMobile : classes.listDesktop
          }
        >
          <ListItemIcon
            key={`icon-${item.label}`}
            className={device !== 'mobile' ? classes.linkIcon : ''}
          >
            {React.createElement(item.icon)}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ) : (
        //si tiene elementos anidados entonces tambien ponerlos
        <>
          <div
            style={{ display: 'flex' }}
            className={
              device === 'mobile' ? classes.listMobile : classes.listDesktop
            }
          >
            <ListItem
              key={item.label}
              button
              divider={device == 'mobile' ? true : false}
              component={Link}
              to={item.route}
            >
              <ListItemIcon
                key={`icon-${item.label}`}
                className={device !== 'mobile' ? classes.linkIcon : ''}
              >
                {React.createElement(item.icon)}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
            <IconButton onClick={() => setInnerOpen(!innerOpen)}>
              {innerOpen ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </div>
          {/* eel collapse sirve para desplegar la lista oculta */}
          <Collapse
            in={innerOpen}
            timeout='auto'
            unmountOnExit
            className={device !== 'mobile' ? classes.collapse : ''}
          >
            <List>
              {item.nested.map((nestedItem) => (
                <ListItem
                  key={nestedItem.label}
                  button
                  component={Link}
                  to={item.route}
                  data-src={nestedItem.targetId}
                  onClick={handleClick}
                  className={
                    device === 'mobile'
                      ? classes.listMobile
                      : classes.listDesktop
                  }
                >
                  <ListItemIcon
                    key={`icon-${nestedItem.targetId}`}
                    className={device !== 'mobile' ? classes.linkIcon : ''}
                  >
                    {React.createElement(nestedItem.icon)}
                  </ListItemIcon>
                  <ListItemText>{nestedItem.label}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      );
    });
  return (
    // <div role='presentation'>
    <>
      {device === 'mobile' ? (
        <>
          <Divider />
          <List>{elements()}</List>
        </>
      ) : (
        <div style={{ position: 'relative', display: 'flex', gap: '1rem' }}>
          {elements()}
        </div>
      )}
    </>
    // </div>
  );
}
