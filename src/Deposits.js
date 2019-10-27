/* eslint-disable no-script-url */

import React from 'react';
import Title from './Title';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code'
import Switch from '@material-ui/core/Switch'


export default function Deposits() {
  const [checked, setChecked] = React.useState(['Example1']);

  let handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if(currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  return (
    <React.Fragment>
      <Title>Group Name</Title>
      <List >
      <ListItem>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-example" primary="groupdItem1" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('Example1')}
            checked={checked.indexOf('Example1') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-example" primary="groupdItem2" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('Example2')}
            checked={checked.indexOf('Example2') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
          />
        </ListItemSecondaryAction>
        
      </ListItem>
      </List>
      
    </React.Fragment>
  );
}
