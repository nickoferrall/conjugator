import React, { useContext, useState } from 'react';

import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Context } from '../../contexts/index';
import Sidebar from './Sidebar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navItemContainer: {
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(1)
    }
  },
  navItem: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav() {
  const classes = useStyles();
  const { loggedIn } = useContext(Context);
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <NavLink
            exact
            to="/"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Conjugator
          </NavLink>
        </Typography>

        <Box className={classes.navItemContainer}>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <NavLink
              exact
              to="/"
              activeStyle={{ textDecoration: 'underline' }}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button className={classes.navItem} color="inherit">
                Home
              </Button>
            </NavLink>
            <NavLink
              exact
              activeStyle={{ textDecoration: 'underline' }}
              to="/settings"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button className={classes.navItem} color="inherit">
                Settings
              </Button>
            </NavLink>
            <NavLink
              exact
              activeStyle={{ textDecoration: 'underline' }}
              to="/feedback"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button className={classes.navItem} color="inherit">
                Feedback
              </Button>
            </NavLink>
            {loggedIn ? (
              <NavLink
                exact
                activeStyle={{ textDecoration: 'underline' }}
                to="/account"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button className={classes.navItem} color="inherit">
                  Account
                </Button>
              </NavLink>
            ) : (
              <NavLink
                exact
                activeStyle={{ textDecoration: 'underline' }}
                to="/sign-up"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button className={classes.navItem} color="inherit">
                  Sign Up
                </Button>
              </NavLink>
            )}
          </Hidden>
        </Box>
      </Toolbar>
      <Sidebar open={open} loggedIn={loggedIn} setOpen={setOpen} />
    </AppBar>
  );
}
