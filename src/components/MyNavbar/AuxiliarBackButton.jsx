import React, { useEffect, useState } from 'react';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';
import { useStyles } from './styles';

export default function AuxiliarBackButton() {
  const history = useHistory();
  const classes = useStyles;
  const [route, setRoute] = useState('/');
  const [diff, setDiff] = useState(0);
  const deep = route.split('/').length;
  const handleBack = () => {
    if (route.length > 2) {
      history.go(-1);
    }
    console.log(history.location);
  };

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      setRoute(history.location.pathname);
      setTimeout(() => {
        let contentSize = document.getElementById('app').clientHeight;
        let viewportSize = window.visualViewport.height;
        console.log(contentSize, viewportSize);
        console.log(`dif : ${contentSize - viewportSize}`);
        setDiff(Math.abs(contentSize - viewportSize));
      }, 4);
    });
  }, [history]);

  return (
    <div className={classes.toolbar}>
      {deep > 2 && (
        <IconButton onClick={handleBack}>
          <ArrowBack />
        </IconButton>
      )}
    </div>
  );
}
