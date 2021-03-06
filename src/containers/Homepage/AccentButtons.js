import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import styles from './HomepageStyles.jss';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const AccentButtons = ({ addAccent, classes, width }) => {
  let accents;
  if (width === 'sm' || width === 'xs') {
    accents = ['á', 'é', 'í', 'ñ', 'ó'];
  } else {
    accents = ['á', 'é', 'í', 'ñ', 'ó', 'ú'];
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {accents.map((accent, index) => {
          return (
            <Button
              key={`${accent}-${index}`}
              className={classes.accentButton}
              onClick={() => addAccent(accent)}
              size="small"
            >
              {accent}
            </Button>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default withWidth()(withStyles(styles)(AccentButtons));
