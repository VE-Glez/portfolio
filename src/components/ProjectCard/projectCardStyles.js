import { makeStyles } from '@material-ui/core';

export const projectCardStyles = makeStyles((theme) => ({
  header: {
    minHeight: 120,
  },
  content: {
    flexGrow: 1,
  },
  label: {
    color: 'inherit',
    fontSize: '0.9em',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  card: {
    maxWidth: 310,
    display: 'flex',
    flexDirection: 'column',
  },
}));
