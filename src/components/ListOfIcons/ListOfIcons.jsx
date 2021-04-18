import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import IconSkill from '../IconSkill/IconSkill';
import babel from '@icons/babel.png';
import css3 from '@icons/css3.png';
import eslint from '@icons/eslint.png';
import figma from '@icons/figma.png';
import html5 from '@icons/html5.png';
import javascript from '@icons/javascript.png';
import nodejs from '@icons/nodejs.png';
import npm from '@icons/npm.png';
import pug from '@icons/pug.png';
import python from '@icons/python.png';
import react from '@icons/react.png';
import sass from '@icons/sass.png';
import webpack from '@icons/webpack.png';
import styledComponents from '@icons/styled-components.png';
import materialui from '@icons/material-ui.png';
import git from '@icons/git.png';

const useStyles = makeStyles((theme) => ({
  iconsWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(4),
    padding: theme.spacing(2, 3),
    justifyContent: 'center',
  },
}));

export default function ListOfIcons() {
  const classes = useStyles();
  return (
    <Box className={classes.iconsWrapper}>
      <IconSkill href='https://html.spec.whatwg.org/' src={html5} alt='html5 icon' />
      <IconSkill href='https://www.w3.org/Style/CSS/' src={css3} alt='css3 icon' />
      <IconSkill href='https://html.spec.whatwg.org/' src={javascript} alt='javascript icon' />
      <IconSkill href='https://pugjs.org/api/getting-started.html' src={pug} alt='pug icon' />
      <IconSkill href='https://sass-lang.com/' src={sass} alt='sass icon' />
      <IconSkill href='https://nodejs.org/en/' src={nodejs} alt='nodejs icon' />
      <IconSkill href='https://git-scm.com/' src={git} alt='git icon' />
      <IconSkill href='https://babeljs.io/' src={babel} alt='babel icon' />
      <IconSkill href='https://eslint.org/' src={eslint} alt='eslint icon' />
      <IconSkill href='https://www.npmjs.com/' src={npm} alt='npm icon' />
      <IconSkill href='https://webpack.js.org/' src={webpack} alt='webpack icon' />
      <IconSkill href='https://reactjs.org/' src={react} alt='react icon' />
      <IconSkill href='https://material-ui.com' src={materialui} alt='material UI icon' />
      <IconSkill href='https://styled-components.com/' src={styledComponents} alt='styledComponents icon' />
      <IconSkill href='https://figma.com/' src={figma} alt='figma icon' />
      <IconSkill href='https://www.python.org/' src={python} alt='python icon' />
    </Box>
  );
}
