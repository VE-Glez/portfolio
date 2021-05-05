import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Paragraph from './styles';

const useStyles = makeStyles((theme) => ({
  '@keyframes animate': {
    '0%': {
      backgroundPosition: '-500%',
    },
    '100%': {
      backgroundPosition: '500%',
    },
  },
  letters: {
    display: 'inline-block',
    fontSize: '2.5em',
    background: 'linear-gradient(90deg, black 10%, white, black 90%)',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
    animation: `$animate 5s ${theme.transitions.easing.easeInOut} infinite`,
    color: 'white',
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
  },
}));

const AnimatedText = ({ words = ['Ingeniero mecatrónico', 'Desarrollador frontend', 'Amante de la tecnología'] }) => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    let changeWord = setTimeout(() => {
      if (index >= words.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3410);
    return () => clearTimeout(changeWord);
  }, [index]);

  return <Paragraph className={classes.letters}>{words[index]}</Paragraph>;
};

export default AnimatedText;
