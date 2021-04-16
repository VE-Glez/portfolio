import React, { useEffect, useRef, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
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
  const collapseRef = useRef(null);
  const scrolledTagRef = useRef(null);
  // TODO hacer una lista de referencias para intentar poner onblur a la lista emergente
  // let refs = listofitems.map(item =)

  useEffect(() => {
    if (innerOpen) {
      collapseRef.current.focus();
    }
  }, [innerOpen]);

  // useEffect(() => {
  //   if (history.location.pathname === '/') {
  //     if (scrolledTagRef.current !== null) {
  //       const position = document.getElementById(
  //         scrolledTagRef.current.dataset.src
  //       );
  //       position.current.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  //       });
  //     }
  //   }
  // }, [history.location.pathname]);

  const handleInnerBlur = () => setInnerOpen(false);
  const handleClickInnerList = () => {
    setInnerOpen(!innerOpen);
  };

  const handleClick = (event) => {
    //se inicia con una promesa porque primero se debe estar en home
    //para poder encontrar el ID
    const promesa = new Promise((resolve, reject) => {
      resolve(() => history.push('/'));
      return;
    });

    promesa.then(() => {
      const targetID = event.nativeEvent.path.find(
        (item) => item.tagName === 'A'
      );
      const anchor = document.getElementById(targetID.dataset.src);
      // anchor.scrollIntoViewIfNeeded() ;
      // debugger;
      setInnerOpen(false);
      setIsOpen(false);
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return anchor;
    });
  };

  const elements = () =>
    listofitems.map((item, index) => {
      return !item.nested ? (
        //si la lista no tiene elementos anidados
        <ListItem
          key={uuidv4()}
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
            key={uuidv4()}
            className={device !== 'mobile' ? classes.linkIcon : ''}
          >
            {React.createElement(item.icon)}
          </ListItemIcon>
          <ListItemText key={uuidv4()} primary={item.label} />
        </ListItem>
      ) : (
        //si tiene elementos anidados entonces ponerlos aqui (por el momento hacen referencia a algun getElementById dentro de la ruta home)
        //TODO dejar de hardcodear para home
        <>
          <div
            key={uuidv4()}
            style={{ display: 'flex' }}
            className={
              device === 'mobile' ? classes.listMobile : classes.listDesktop
            }
          >
            <ListItem
              key={uuidv4()}
              button
              divider={device == 'mobile' ? true : false}
              component={Link}
              onClick={() => setIsOpen(false)}
              to={item.route}
            >
              <ListItemIcon
                key={uuidv4()}
                className={device !== 'mobile' ? classes.linkIcon : ''}
              >
                {React.createElement(item.icon)}
              </ListItemIcon>
              <ListItemText key={uuidv4()} primary={item.label} />
            </ListItem>
            <IconButton
              key={uuidv4()}
              data-target={`collapse-${item.label}${index}`}
              onClick={handleClickInnerList}
            >
              {innerOpen ? (
                <ExpandLess key={uuidv4()} />
              ) : (
                <ExpandMore key={uuidv4()} />
              )}
            </IconButton>
          </div>
          {/* eel collapse sirve para desplegar la lista oculta */}
          <Collapse
            key={uuidv4()}
            // tabIndex='0'
            in={innerOpen}
            timeout='auto'
            unmountOnExit
            className={clsx(
              device !== 'mobile' && classes.collapseDesktop,
              classes.collapse
            )}
            id={`collapse-${item.label}${index}`}
            ref={collapseRef}
            // onBlur={handleInnerBlur}
          >
            <List key={uuidv4()}>
              {item.nested.map((nestedItem) => (
                <ListItem
                  key={uuidv4()}
                  tabIndex='0'
                  button
                  component={Link}
                  // divider={device == 'mobile' ? true : false}
                  to={item.route}
                  data-src={nestedItem.targetId}
                  ref={scrolledTagRef}
                  onClick={handleClick}
                  onBlur={handleInnerBlur}
                  className={
                    device === 'mobile'
                      ? classes.listMobile
                      : classes.listDesktop
                  }
                >
                  <ListItemIcon
                    key={uuidv4()}
                    className={device !== 'mobile' ? classes.linkIcon : ''}
                  >
                    {React.createElement(nestedItem.icon)}
                  </ListItemIcon>
                  <ListItemText key={uuidv4()}>{nestedItem.label}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      );
    });
  return (
    <>
      {device === 'mobile' ? (
        <>
          <Divider />
          <List key={uuidv4()}>{elements()}</List>
        </>
      ) : (
        <div key={uuidv4()} className={classes.wrapperDesktopNavbar}>
          {elements()}
        </div>
      )}
    </>
  );
}
