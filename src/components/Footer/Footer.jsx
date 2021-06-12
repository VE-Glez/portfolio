import React from 'react';
import {
  makeStyles,
  Button,
  Typography,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  Grid,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { GitHub, LinkedIn, PhoneAndroidOutlined } from '@material-ui/icons';
import { FaDev, FaTwitter } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    clear: 'both',
    background: theme.palette.background.paper,
  },
  list: {
    '& div.MuiListItemIcon-root': {
      minWidth: 'auto',
      margin: theme.spacing(0, 2, 0, 0),
    },
  },
  mainGrid: {
    justifyContent: 'center',
    alignItems: 'space-between',
    width: '100%',
    margin: theme.spacing(0, 'auto'),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer} id='contact-me'>
      <Grid container justify='center' className={classes.mainGrid}>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' color='textPrimary'>
            Contact me
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <List className={classes.list}>
            <ListItem
              target='_blank'
              button
              href='mailto:valentin.eduardo.g94@gmail.com'
              component={Button}
            >
              <ListItemIcon>
                {' '}
                <MailOutlineIcon style={{ color: '#e53f32' }} />{' '}
              </ListItemIcon>
              <ListItemText primary='Send an email' />
            </ListItem>
            <ListItem
              target='_blank'
              button
              target='_blank'
              href='https://twitter.com/ve_glez'
              component={Button}
            >
              <ListItemIcon>
                {' '}
                <FaTwitter style={{ color: '#4da1f2' }} />{' '}
              </ListItemIcon>
              <ListItemText primary='@VE_Glez' />
            </ListItem>
            {/* <ListItem
              target='_blank'
              button
              href='tel:+522293390918'
              component={Button}
            >
              <ListItemIcon>
                {' '}
                <PhoneAndroidOutlined style={{ color: '#00436b' }} />{' '}
              </ListItemIcon>
              <ListItemText primary='Call me' />
            </ListItem> */}
          </List>
        </Grid>
        <Grid item xs={6}>
          <List className={classes.list}>
            <ListItem
              target='_blank'
              button
              href='https://github.com/veglez'
              component={Button}
            >
              <ListItemIcon>
                {' '}
                <GitHub style={{ color: '#24292e' }} />{' '}
              </ListItemIcon>
              <ListItemText primary='Visit my profile' />
            </ListItem>
            <ListItem
              button
              target='_blank'
              href='https://www.linkedin.com/in/valent%C3%ADn-eduardo-gonz%C3%A1lez-morales-5388a2142/'
              component={Button}
            >
              <ListItemIcon>
                {' '}
                <LinkedIn style={{ color: '#3766c2' }} />{' '}
              </ListItemIcon>
              <ListItemText primary='LinkedIn profile' />
            </ListItem>
            {/* <ListItem
              target='_blank'
              button
              href='https://dev.to/veglez'
              component={Button}
            >
              <ListItemIcon>
                {' '}
                <FaDev style={{ fontSize: '1.25rem', color: '#363d44' }} />{' '}
              </ListItemIcon>
              <ListItemText primary='Check my blog' />
            </ListItem> */}
          </List>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
