import { Typography } from '@material-ui/core';
import React from 'react';
import { SiStyledComponents, SiReact, SiMaterialUi } from 'react-icons/si';
import rpsg from '@images/rock-papper-scissors.vercel.app_.png';
import capi from '@images/countries-api-six.vercel.app_.png';
import rAmapi from '@images/rick-and-morty-api-alpha.vercel.app_.png';
import calculator from '@images/calculator-sigma-lime.vercel.app_.png';
import compendium from '@images/frontend-compendium.vercel.app_.png';
import pomodoro from '@images/pomodoro-clone.vercel.app_.png';

export const cardsInfo = [
  {
    id: 'rpsg',
    title: 'Juego piedra-papel-tijeras',
    subtitle: 'Con versión extendida',
    image: rpsg,
    description:
      'Hecho con react hook: useContext y también con styled components',
    linkRepo: 'https://github.com/veglez/rockPapperScissors',
    linkOnline: 'https://rock-papper-scissors.vercel.app/',
  },
  {
    id: 'capi',
    title: 'Countries API',
    subtitle: 'With dark theme',
    image: capi,
    description:
      'Uso de una API pública, react hooks para el dark theme y el fetch de datos.',
    linkRepo: 'https://github.com/veglez/countries-api',
    linkOnline: 'https://countries-api-six.vercel.app/',
  },
  {
    id: 'rAmapi',
    title: 'Rick and Morty API',
    subtitle: 'Reack Hooks',
    image: rAmapi,
    description:
      'Uso de hooks useReducer con useContext para cambiar temas y es escalable para agregar mas temas en el futuro, además posee un scroll infinito (hasta acabar de consumir los datos de la API).',
    linkRepo: 'https://github.com/veglez/rick-and-morty-api',
    linkOnline: 'https://rick-and-morty-api-alpha.vercel.app/',
  },
  {
    id: 'calculator',
    title: 'Calculator',
    subtitle: 'Reack Hooks',
    image: calculator,
    description:
      'Uso Typescript en la lógica para realizar la calculadora, react hooks para manejar los temas.',
    linkRepo: 'https://github.com/veglez/calculator',
    linkOnline: 'https://calculator-sigma-lime.vercel.app/',
  },
  {
    id: 'compendium',
    title: 'FrontendMentor compendium',
    subtitle: 'A bunch of projects',
    image: compendium,
    description:
      'Uso de python como algoritmo principal para configurar todo el espacio de trabajo. Utiliza material-ui para la interfaz principal pero cada uno de los proyectos utiliza hojas de estilo a parte en SASS y algunos con styled components.',
    linkRepo: 'https://github.com/veglez/frontend-compendium',
    linkOnline: 'https://frontend-compendium.vercel.app/',
  },
  {
    id: 'pomodoro',
    title: 'Pomodoro',
    subtitle: 'A simple pomodoro clock',
    image: pomodoro,
    description:
      'Mi primer proyecto con react, inspirado en una aplicación de escritorio existente.',
    linkRepo: 'https://github.com/veglez/pomodoro-clone',
    linkOnline: 'https://pomodoro-clone.vercel.app/',
  },
];
