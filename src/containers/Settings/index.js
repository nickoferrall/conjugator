import React, { useState } from 'react';

import Latam from './Latam';
import Difficulty from './Difficulty';
import Tenses from './Tenses';

import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    width: '100%',
    margin: '10px auto',
    backgroundColor: '#fafafa',
    [theme.breakpoints.up('sm')]: {
      width: '580px'
    }
  },
  button: {
    marginRight: 100,
    marginTop: 20,
    width: 120,
    height: 40
  },
  buttonUpdated: {
    marginRight: 100,
    marginTop: 20,
    width: 120,
    height: 40,
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: '#1B5E20'
    }
  }
});

function Settings({ classes }) {
  const [latam, setLatam] = useState(false);
  return (
    <Paper className={classes.main} elevation={10}>
      <Latam latam={latam} setLatam={setLatam} />
      <Difficulty />
      <Tenses />
    </Paper>
  );
}

export default withStyles(styles)(Settings);
