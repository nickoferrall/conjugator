import React, { useContext } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Context } from '../../contexts/index';

const Latam = () => {
  const { latam, setLatam } = useContext(Context);

  return (
    <List>
      <ListSubheader>Latam Spanish or Castilian Spanish</ListSubheader>
      <ListItem>
        <Checkbox checked={!latam} onClick={() => setLatam(!latam)} />
        <ListItemText>Include "Vosotros"</ListItemText>
      </ListItem>
    </List>
  );
};

export default Latam;
