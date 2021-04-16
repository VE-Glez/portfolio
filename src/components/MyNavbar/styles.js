import { purple } from '@material-ui/core/colors';
import { makeStyles, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  listMobile: {
    width: 200,
    fontSize: theme.typography.h3.fontSize,
  },
  listDesktop: {
    width: 140,
    fontSize: theme.typography.h3.fontSize,
  },
  linkIcon: {
    minWidth: 40,
    color: theme.palette.primary.contrastText,
  },
  collapse: {
    boxShadow: theme.shadows[2],
    background: theme.palette.grey[200],
    '&:focus': {
      outline: 'none',
      padding: 50,
    },
  },
  collapseDesktop: {
    position: 'absolute',
    top: 60,
    zIndex: 10,
    background: theme.palette.grey[600],
  },
  wrapperDesktopNavbar: {
    position: 'relative',
    display: 'flex',
    gap: '1rem',
  },
  toolbar: {
    // ...theme.mixins.toolbar,
    background: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(0, 2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
